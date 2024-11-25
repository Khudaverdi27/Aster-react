import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
  Field,
  Input,
  Label,
} from "@headlessui/react";
import { useEffect, useState } from "react";

import clsx from "clsx";
import { useFetchLogin } from "../../hooks/useFetch";
import { saveStorage } from "../../utils/helper";

export default function Login() {
  let [isOpen, setIsOpen] = useState(false);
  const [data, setData, loading] = useFetchLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const params = {
    email: email,
    password: password,
  };

  const handleOk = async () => {
    await setData(params);
    console.log(data);
  };

  useEffect(() => {
    if (data.user) {
      saveStorage("user", data);
      saveStorage("token", data.token);
      location.reload();
    }
  }, [data]);

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md border border-skyBlue py-2 px-4 text-sm font-medium  "
      >
        Giris
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border border-skyBlue"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium ">
                Hesabiniza giris edin
              </DialogTitle>

              <div className="w-full max-w-md px-4">
                <Field>
                  <Label className="text-sm/6 font-medium ">Email</Label>

                  <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={clsx(
                      "mt-3 block w-full rounded-lg border border-black bg-white/5 py-1.5 px-3 text-sm/6 ",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                  />
                  <p className="text-red-500">{data?.msg?.email}</p>
                </Field>
              </div>
              <div className="w-full max-w-md px-4">
                <Field>
                  <Label className="text-sm/6 font-medium ">Password</Label>

                  <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={clsx(
                      "mt-3 block w-full rounded-lg border border-black bg-white/5 py-1.5 px-3 text-sm/6 ",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                  />
                  <p className="text-red-500">{data?.msg?.password}</p>
                </Field>
              </div>

              <div className="mt-4 flex justify-end w-full space-x-3">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold border border-skyBlue"
                  onClick={close}
                >
                  Cancel
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold border border-skyBlue"
                  onClick={handleOk}
                >
                  Ok
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
