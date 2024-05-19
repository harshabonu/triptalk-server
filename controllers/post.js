import { TryCatch } from "../middlewares/error.js";
import { Chat } from "../models/chat.js";
import { Post } from "../models/post.js";


const newPost = TryCatch(async (req, res, next) => {
  const { title, content } = req.body;



  await Post.create({
    title,
    content,
    sender: req.user,
  });

  //   emitEvent(req, ALERT, allMembers, `Welcome to ${name} group`);
  //   emitEvent(req, REFETCH_CHATS, members);

  return res.status(201).json({
    success: true,
    message: "Post Created",
  });
});
const showPost = TryCatch(async (req, res, next) => {

  


  const friends = await Chat.find({ members: req.user,groupChat:false }).populate(
    "members",
    "_id"
  );
  let friendsList = [];
  const transformedChats = friends.map(({ _id,members }) => {

    return {
      members: members.reduce((prev, curr) => {
        if (curr._id.toString() !== req.user.toString()) {
          prev.push(curr._id);
          friendsList.push(curr._id);
        }
        return prev;
      }, []),
    };
  });
  
  friendsList.push(req.user)


  
  const allposts = await Post.find({sender:friendsList}).populate("sender","name")
      
  return res.status(200).json({
    success: true,
    messages: allposts.reverse(),
    
  });


});


export {

  newPost,
  showPost
};

