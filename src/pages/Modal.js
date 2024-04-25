import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
 

const theme = {
    dialog: {
      defaultProps: {
        size: "md",
        dismiss: {},
        animate: {
          unmount: {},
          mount: {},
        },
        className: "",
      },
      valid: {
        sizes: ["xs", "sm", "md", "lg", "xl", "xxl"],
      },
      styles: {
        base: {
          backdrop: {
            display: "grid",
            placeItems: "place-items-center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "w-screen",
            height: "h-screen",
            backgroundColor: "bg-transparent",
            backgroundOpacity: "bg-opacity-60",
            backdropFilter: "backdrop-blur-sm",
          },
          container: {
            position: "relative",
            bg: "bg-white",
            m: "m-4",
            borderRadius: "rounded-lg",
            boxShadow: "shadow-2xl",
            color: "text-blue-gray-500",
            fontSmoothing: "antialiased",
            fontFamily: "font-sans",
            fontSize: "text-base",
            fontWeight: "font-light",
            lineHeight: "leading-relaxed",
          },
        },
        sizes: {
          xs: {
            width: "w-full md:w-3/5 lg:w-2/5 2xl:w-1/4",
            minWidth: "min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%]",
            maxWidth: "max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%]",
          },
          sm: {
            width: "w-full md:w-2/3 lg:w-2/4 2xl:w-1/3",
            minWidth: "min-w-[80%] md:min-w-[66.666667%] lg:min-w-[50%] 2xl:min-w-[33.333333%]",
            maxWidth: "max-w-[80%] md:max-w-[66.666667%] lg:max-w-[50%] 2xl:max-w-[33.333333%]",
          },
          md: {
            width: "w-full md:w-3/4 lg:w-3/5 2xl:w-2/5",
            minWidth: "min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%]",
            maxWidth: "max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]",
          },
          lg: {
            width: "w-full md:w-5/6 lg:w-3/4 2xl:w-3/5",
            minWidth: "min-w-[90%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]",
            maxWidth: "max-w-[90%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]",
          },
          xl: {
            width: "w-full md:w-5/6 2xl:w-3/4",
            minWidth: "min-w-[95%] md:min-w-[83.333333%] 2xl:min-w-[75%]",
            maxWidth: "max-w-[95%] md:max-w-[83.333333%] 2xl:max-w-[75%]",
          },
          xxl: {
            display: "flex",
            flexDirection: "flex-col",
            width: "w-screen",
            minWidth: "min-w-[100vw]",
            maxWidth: "max-w-[100vw]",
            height: "h-screen",
            minHeight: "min-h-[100vh]",
            maxHeight: "max-h-[100vh]",
            m: "m-0",
            borderRadius: "rounded-none",
          },
        },
      },
    },
  };

function Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <ThemeProvider value={theme}>
      <button onClick={handleOpen}>Напишите мне</button>
    <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Оставить заявку 
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <div className="grid gap-9">
            <Input label="Введите имя" />
            <Input label="Введите E-mail" />
            <Input label="Введите телефон" />
            <Textarea label="Комментарий" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            Выйти
          </Button>
          <Button variant="" className="bg-purple" onClick={handleOpen}>
            Отправить 
          </Button>
        </DialogFooter>
      </Dialog>
      </ThemeProvider>
    </>
  );
}
export default Modal