import React from "react";

const AllTasks = (props) => {
  return (
    <>
      {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.body}</p>
          </div>
        ))
      ) : (
        <p>No tasks</p>
      )}
    </>
  );
};

export default AllTasks;
