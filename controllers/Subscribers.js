const Subscriber = require("../db/models/subscriber");

class Subscribers {
    async getAll(req, res){
        try{
            const subscribers = await Subscriber.find();
            res.json({
                success: true,
                message: "List of subscribers",
                data: subscribers
            });
        } catch(err){
            res.status(500).json({
                success: false,
                message: err.message,
                data: null
            })
        }
    }

    async getOne(req, res){
        return res.json({
            success: true,
            message: "Requested Subscriber Data",
            data: res.subscriber
        });
    }

    async create(req, res){
        if(!req.body || !req.body.name || !req.body.subscribedToChannel){
            res.status(400).json({
                success: false,
                message: "Invalid Body Syntax",
                data: null
            })
        }

        const subscriber = new Subscriber({
            name: req.body.name,
            subscribedToChannel: req.body.subscribedToChannel
        });

        try{
            const newSubscriber = await subscriber.save();
            res.status(201).json({
                success: true,
                message: "Subscriber instance was successfully created",
                data: newSubscriber
            });
        } catch(err){
            res.status(500).json({
                success: false,
                message: err.message,
                data: null
            })
        }
    }

    async update(req, res){

    }

    async delete(req, res){

    }

    async getSubscriberMiddleware(req, res, next){
        let subscriber;
        try{
            subscriber = await Subscriber.findById(req.params.id);
            if(subscriber == null){
                return res.status(404).json({
                    success: false,
                    message: "No such subscriber found",
                    data: null
                });
            }
        } catch(err){
            return res.status(500).json({
                success: false,
                message: err.message,
                data: null
            })
        }

        res.subscriber = subscriber;
        next();
    }
}

module.exports = new Subscribers();
