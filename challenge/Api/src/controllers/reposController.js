const axios = require('axios');

exports.get = (req, res, next) => {
  const url = 'https://api.github.com/search/repositories?';
  const query_string = `q=${encodeURIComponent('org:takenet fork:true language:csharp')}`; 
  const per_page_param = '&per_page=50'
  
  axios.get(`${url}${query_string}${per_page_param}`)
  .then((api_res) => {
    const { items: repos } = api_res.data;

    const repos_sorted = repos.sort((current_item, next_item) => new Date(current_item.created_at) - new Date(next_item.created_at))
                              .splice(0, 5)
                              .map((repo, index) => {
                                const { full_name: repo_name, description: repo_description, owner: { avatar_url } } = repo;

                                return {
                                  header: {
                                    type: 'application/vnd.lime.media-link+json',
                                    value: {
                                        title: repo_name,
                                        text: repo_description,
                                        type: "image/png",
                                        uri: avatar_url
                                    }
                                  }
                                }
                              });
                 
    res.status(200).send(
      {
        itemType: 'application/vnd.lime.document-select+json',
        items: repos_sorted
      }
    );
  })
  .catch((error) => {
    res.status(404).send({Msg: 'something went bad!!!'})
  })
}