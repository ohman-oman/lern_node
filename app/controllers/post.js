// exports.getPost = (req, res) => {
//     res.send("Hello world from node js update in route with controller");
// };

exports.getPost = (req, res) => {
    res.json({
        post: [{
            title: "First post"
        }, {
            title: "Second post"
        }]
    })
}