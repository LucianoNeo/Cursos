import PostModel from '../models/posts'

const postsRoute = (app) => {
    
    app.route('/posts/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {
                query._id = id
            }

            try {

                const post = await PostModel.find(query)
                res.send({ post })
                
            } catch (error) {
                res.status(400).send({ error: 'Failed to find post' })
            }
        })
        .post(async (req, res) => {

            try {
                const post = new PostModel(req.body)
                await post.save()

                res.status(201).send('OK')
            } catch (error) {
                res.send(error)   
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'post ID is missing.' })
            }

            try {
                const updatedpost = await PostModel.findOneAndUpdate({ _id: id }, req.body, {
                    new: true,
                });

                console.log(updatedpost)

                if (updatedpost) {
                    return res.status(200).send('OK')
                }


                res.status(400).send({ error: 'Could not update the post' })

                
            } catch (error) {
                res.send(error)
            }
        })
        .delete(async (req, res) => {

            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'post ID is missing.' })
            }

            try {
                const deletedpost = await PostModel.deleteOne({ _id: id })

                if (deletedpost.deletedCount) {
                    return res.send('OK')
                }

                res.status(400).send({ error: 'Could not delete the post' })

            } catch (error) {
                res.send(error)
            }
        })
}

module.exports = postsRoute