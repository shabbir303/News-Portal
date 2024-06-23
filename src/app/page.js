import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Bitcoin from "@/assets/top-news.png";
import sideTop from "@/assets/side-top-news.png";
import img1 from "@/assets/top-news2.png";
import lastImg from "@/assets/side-bottom-img.png";

import blank from "@/assets/blankImage.png";
function getFirst100Words(paragraph) {
  // Split the paragraph into an array of words
  let words = paragraph.split(" ");

  // Select the first 20 words
  let first100Words = words.slice(0, 40);

  // Join these words back into a string
  let result = first100Words.join(" ");

  return result;
}
const paragraphs =
  "Bitcoin, the world's first and most well-known cryptocurrency, has been making headlines recently due to significant market movements and regulatory developments. After experiencing a dramatic price surge earlier this year, Bitcoin has seen increased volatility, prompting both excitement and caution among investors....";

const paragraph1 =
  "The European Union has announced a stringent set of new sanctions aimed at further isolating Russia from the global financial system. The latest measures are designed to severely limit Russia's access to the World Bank and other international financial institutions. This move is a part of the EU's ongoing efforts to pressure Moscow over its actions in Ukraine.";

const paragraph2 =
  "Bitcoin has once again captured the attention of investors and the financial world, surging past the $40,000 mark amidst a wave of institutional interest and increased regulatory clarity. This resurgence marks a significant rebound from the cryptocurrency's previous lows, highlighting its resilience and growing acceptance in the mainstream financial landscape.";

const TheResult = getFirst100Words(paragraphs);

const newNews = getFirst100Words(paragraph1);

const newNews1 = getFirst100Words(paragraph2);
const HomePage = () => {
  const d = new Date();
  const date = d.toDateString();
  return (
    <Container>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <Typography className="pt-[15px] text-[18px] font-bold">
              National News
            </Typography>
            <Divider
              sx={{ borderColor: "red", width: "130px", borderWidth: "4px" }}
            />
            <Divider />
            <Image className="pt-[20px]" src={Bitcoin} alt={Bitcoin} />
            <Chip
              label="Technology"
              sx={{ backgroundColor: "red", color: "white", marginY: "20px" }}
            />
            <Typography className="text-[30px] font-bold">
              Bitcoin climbs as Elon Mask says Tesla Likely to accept it again
            </Typography>
            <Typography className="mt-[15px] text-[15px] font-thin text-slate-500">
              By Shabbir Hossain - {date}
              <br />
              <br />
              {TheResult}...
            </Typography>
            <Divider className="my-[20px] border-[1.5px]" />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Image src={img1} alt="top news" />
                <Typography className="text-[18px] font-bold mt-4">
                  Eu&apos;s new snaction aim to cut Russia off from world bank
                  <br />
                  <p className="text-[15px] text-slate-400 font-thin my-5">
                    By Shabbir Hossain - {date} <br />
                    <br />
                    {newNews}...{" "}
                  </p>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Image src={sideTop} alt="top news" />
                <Typography className="text-[18px] font-bold mt-4">
                  Bitcoin Surges Past $40,000 as Institutional Interest and
                  Regulatory Clarity Boost Confidence
                  <br />
                  <p className="text-[15px] text-slate-400 font-thin my-5">
                    By Shabbir Hossain - {date} <br />
                    <br />
                    {newNews1}...{" "}
                  </p>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Typography className="pt-[15px] text-[18px] font-bold">
              Sylhet
            </Typography>
            <Divider
              sx={{ borderColor: "red", width: "80px", borderWidth: "4px" }}
            />
            <Divider />
            <Image className="pt-[20px]" src={sideTop} alt={Bitcoin} />
            <Chip
              label="Technology"
              sx={{ backgroundColor: "red", color: "white", marginY: "20px" }}
            />
            <Typography className="text-[20px] font-bold">
              Bitcoin climbs as Elon Mask says Tesla Likely to accept it again
            </Typography>
            <Typography className="mt-[15px] text-[15px] font-thin text-slate-500">
              By Awlad Hossain - {date}
            </Typography>

            <Divider className="my-[20px] border-[1.5px]" />

            
            <Stack direction="row" spacing={2}>
              <Image src={blank} alt={blank}/>
              <Typography className="text-[15px] font-bold">Global Leaders Convene in Geneva for Climate Summit Amid Rising Environmental Concerns
                <br/>
                <p className="text-[15px] font-thin text-slate-400">{date}</p>
              </Typography>
            </Stack>
            <Divider className="my-[20px] " />
            <Stack direction="row" spacing={2} >
              <Image src={blank} alt={blank}/>
              <Typography className="text-[15px] font-bold">Historic Peace Agreement Signed Between Armenia and Azerbaijan, Ending Years of Conflict
                <br/>
                <p className="text-[15px] font-thin text-slate-400">{date}</p>
              </Typography>
            </Stack>
            <Divider className="my-[20px] " />
            <Stack direction="row" spacing={2}>
              <Image src={blank} alt={blank}/>
              <Typography className="text-[15px] font-bold">Ethereum 2.0 Upgrade Nears Completion, Promising Lower Fees and Faster Transactions
                <br/>
                <p className="text-[15px] font-thin text-slate-400">{date}</p>
              </Typography>
            </Stack>
            <Divider className="my-[20px] " />
            <Stack direction="row" spacing={2}>
              <Image src={blank} alt={blank}/>
              <Typography className="text-[15px] font-bold">U.S. SEC Approves First Bitcoin ETF, Marking a Milestone for Cryptocurrency Investments
                <br/>
                <p className="text-[15px] font-thin text-slate-400">{date}</p>
              </Typography>
            </Stack>
            <Divider className="my-[20px] " />
            
            <Image src={lastImg} alt={lastImg} width={200} marginY="30px"/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
