const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userData:{
    userId:{
      type:Schema.ObjectId,
      required:true
    },
    username:{
      type:String,
      default:'Anonymous',
    },
    profilePicture:{
      type:String,
    },
  },
  data:{
    title:{
      type:String,
      required:true,
      maxlength: 50,
      minlength:10
    },
    description:{
      type:String,
      maxlength:500
    },
    attachment:{
      images:[{
        type:String
      }],
      documents:[
        {
          type:String
        }
      ]
    }
  },
  metaData:{
    createdTime:{
      type:Date,
      default:Date.now(),
    },
    likeCount:{
      type:Number,
      default:0
    },
    commentCount:{
      type:Number,
      default:0
    },
  },
  comments:[
    {
      type:Schema.ObjectId,
      ref:'Comment'
    }
  ]
})

module.exports = mongoose.model('Post', postSchema);
