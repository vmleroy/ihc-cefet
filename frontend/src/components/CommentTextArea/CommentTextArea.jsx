import React from "react";

export const CommentTextArea = ({ writable, value, setValue }) => {
  const onInput = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setValue(e.target.value);
  };

  return (
    <div className="flex w-full flex-col">
      <textarea
        id="comment-textarea"
        className="resize-none rounded-lg bg-light-commentFill py-2 px-3 text-light-secondary placeholder-input-text focus:outline-none dark:bg-dark-commentFill"
        placeholder="Escreva um comentário..."
        readOnly={!writable}
        value={value}
        onInput={(e) => {
          onInput(e);
        }}
      />
    </div>
  );
};
