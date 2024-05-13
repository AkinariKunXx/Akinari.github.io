import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
   
  
   
  export default function PricingCard({ card }) {
    let advJsx = card.adv.map((elem, i) => {
      return (<li className="flex items-center gap-4" key={i}>
        <Typography className="font-normal">{elem}</Typography>
      </li>)
    })
    return (
      <Card className="bg-indigo-lightest-10 w-full max-w-[20rem] p-8">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            {card.title}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-bottom gap-1 text-7xl font-normal"
          >
            <img className="h-[20rem] object-bottom w-100pc" src={card.src} />
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col justify-between h-100 mt-12 p-0">
          <ul className="p-0">
            {advJsx}
          </ul>
          <Button
            size="lg"
            color="bg-indigo white fs-s3 br-4 f"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-indigo white fs-s3 black fw-600 no-underline"
            ripple={false}
            fullWidth={true}
          >
            Приобрести
          </Button>
        </CardBody>    
      </Card>
    );
  }