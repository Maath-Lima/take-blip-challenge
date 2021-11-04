const axios = require('axios');

exports.get = (req, res, next) => {
  const url = 'https://api.github.com/search/repositories?';
  const query_string = `q=${encodeURIComponent('org:takenet fork:true language:csharp')}`; 
  const per_page_param = '&per_page=50'
  
  axios.get(`${url}${query_string}${per_page_param}`)
  .then((api_res) => {
    const { items: repos } = api_res.data;
    let avatar_url = '';

    const repos_sorted = repos.sort((current_item, next_item) => new Date(current_item.created_at) - new Date(next_item.created_at))
                              .splice(0, 5)
                              .map((repo, index) => {
                                const {full_name: repo_name, description: repo_description} = repo;

                                if (index === 0) avatar_url = repo.owner.avatar_url;

                                return {
                                  repo_name,
                                  repo_description
                                }
                              });
                 
    res.status(200).send(
      {
        avatar: avatar_url,
        repositorios: repos_sorted
      }
    );
  })
  .catch((error) => {
    res.status(404).send({Msg: 'something went bad!!!'})
  })
}