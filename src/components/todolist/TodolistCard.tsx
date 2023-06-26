function TodolistCard({ text }: { text: string }) {
  return (
    <div className="p-4 my-2 mx-5 flex flex-row items-center border-2 dark:border-[#141414] shadow-lg dark:shadow-lg rounded-md overflow-hidden hover:scale-110 hover:shadow-cyan-200 hover:dark:shadow-cyan-400 duration-300">
      <li className="flex gap-3 items-center text-primary">
        <p className="my-2 text-base xxs:text-sm xxxs:text-xs text-justify font-normal text-stone-500 dark:text-stone-300">
          {text}
        </p>
      </li>
    </div>
  );
}

export default TodolistCard;
