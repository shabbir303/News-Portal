import { Container, Typography } from "@mui/material";
import Image from "next/image";
import news from "@/assets/The Dragon News.png";
const Header = () => {
    const d = new Date();
    const date = d.toDateString();
    return (
        <Container>
            <Typography>

            </Typography>
            <Image
             className="mx-auto py-[20px]"
             src={news}
             alt="falcon news"
            />
            <Typography className="pb-[20px] text-center font-mono uppercase"> Jurnalish Without Fear or Favour</Typography>
            <Typography className="pb-[20px] text-center font-bold">
                {date}
            </Typography>
        </Container>
    );
};

export default Header;