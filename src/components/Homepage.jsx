import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import Content from "./Content";
import Nav from "./Nav";
import Modal from "react-modal";
import QuestionsForm from "./form";

function Homepage() {
  const [isopen, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  const [questions, addQuestion] = useState([
    "What career is best for me?",
    "What is your take on artificial intelligence",
  ]);
  const handleChange=(e)=>{
    addQuestion(setValue(value=e.target.value))
  }
  const handleSubmit=(e)=>{
    addQuestion([...questions,e.target.value])
  }
  return (
    <div>
      <Nav title="Quiz App" />
      <div>
        <Content body={questions[0]} />
        <Content body={questions[1]} />
        <Modal isOpen={isopen} setOpen={setOpen} className="modal__form">
          <QuestionsForm isopen={isopen} setOpen={setOpen} />
        </Modal>

        {/* Button */}
        <button className="quiz__post__btn" onClick={() => setOpen(true)}>
          <IconButton>
            <Add />
            Post quiz
          </IconButton>
        </button>
      </div>
    </div>
  );
}

export default Homepage;
