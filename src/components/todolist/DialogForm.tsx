import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function DialogForm({
  ButtonText,
  ButtonCloseText,
  setInput,
  handleClick,
}: {
  ButtonText: string;
  ButtonCloseText: string;
  setInput: any;
  handleClick: any;
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-900 to-cyan-400 drop-shadow-md hover:scale-110 duration-300 my-5"
        >
          {ButtonText}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add item
                  </Dialog.Title>

                  <button
                    className="fixed right-0 top-0 text-4xl text-cyan-600 border-cyan-600 hover:scale-110 duration-300 border-2 border-transparent p-4 rounded-full items-center cursor-pointer"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                  </button>
                  <div className="mt-2 text-sm text-gray-500">
                    <form>
                      <div className="">
                        <input
                          type="text"
                          className="mt-4 shadow-md shadow-stone-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Task name"
                          name="taskName"
                          // value={}
                          onChange={(e) => setInput(e.currentTarget.value)}
                        ></input>
                      </div>
                      {/* <div className="">
                        <textarea
                          className="shadow-md shadow-stone-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          rows={4}
                          placeholder="Task description"
                          name="description"
                          // value={}
                          // onChange={}
                        ></textarea>
                      </div> */}
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        handleClick();
                        closeModal();
                      }}
                    >
                      {ButtonCloseText}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default DialogForm;
