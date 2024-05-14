import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
 
export default function Form() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button className="button bg-white black fw-600 no-underline mx-5" onClick={handleOpen}>Регистрация</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
                Войти
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray">
                Введите свой адрес электронной почты и пароль для входа.
            </Typography>
            <Typography className="-mb-2" variant="h6">
                Ваш адрес электронной почты
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
                Ваш пароль
            </Typography>
            <Input label="Password" size="lg" />
          
          </CardBody>
          <CardFooter className="pt-0">
          <Button variant="" className="bg-purple" onClick={handleOpen} fullWidth>
                Войти
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
                У вас нет учетной записи?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}>
                Зарегистрироваться
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}