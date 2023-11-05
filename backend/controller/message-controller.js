import Message from "../model/message.js";
import Conversation from "../model/conversation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();

    await Conversation.findByIdAndUpdate(
      req.body.conversationId,
      {
        message: req.body.text,
      },
      { new: true }
    );

    return res.status(200).json("Message has been sent successfully");
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const getMessages = async (request, response) => {
  try {
    const messages = await Message.find({ conversationId: request.params.id });
    console.log("messages=", messages);
    return response.status(200).json(messages);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};
