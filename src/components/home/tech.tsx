import { Icon } from "@iconify/react";

function TechnologyItem({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="p-4 my-2 mx-5 flex flex-row items-center border-2 dark:border-[#141414] shadow-lg dark:shadow-lg rounded-md overflow-hidden hover:shadow-cyan-200 hover:dark:shadow-cyan-400 duration-150">
      <li className="flex gap-3 items-center text-primary">
        <Icon
          icon={icon}
          className="h-12 w-12 xxs:h-12 xxs:w-12 xxxs:h-9 xxxs:w-9"
        />
        <p className="my-2 text-base xxs:text-sm xxxs:text-xs text-justify font-normal text-stone-500 dark:text-stone-300">
          {title}
        </p>
      </li>
    </div>
  );
}

export default TechnologyItem;
