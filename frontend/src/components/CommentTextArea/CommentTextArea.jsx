import React from "react";

export const CommentTextArea = ({
  writable,
  value
}) => {
  return (
    <div className="flex w-full flex-col">
      <textarea
        id="comment-textarea"
        className="w-1/2 resize-none rounded-lg bg-light-inputFill px-4 text-light-secondary placeholder-input-text focus:outline-none dark:bg-dark-inputFill"
        placeholder="Escreva um comentário..."
        readOnly={!writable}
        value={value}
        onInput={(e) => { e.target.style.height = "inherit"; e.target.style.height = `${e.target.scrollHeight}px`;}}
      />
    </div>
  );
};
