/* eslint-disable import/no-anonymous-default-export */

import Mailjet from "node-mailjet";

const envData = {
  MAILJET_API: "707bb9a8014c8b8c127ff7f448236e24",
  MAILJET_PASSWORD: "6f784dcb3b83c27b5bfc2bc9cd803f32",
};

export default async (req, context) => {
  const mailjet = Mailjet.apiConnect(
    envData.MAILJET_API,
    envData.MAILJET_PASSWORD,
    {
      config: {},
      options: {},
    }
  );

  const request = await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "contactform@tropicwavestudio.com",
          Name: `Contact form`,
        },
        To: [
          {
            Email: "daussy.simon@gmail.com",
            Name: "passenger 1",
          },
        ],
        Subject: "New message",
        HTMLPart: "<div>test</div>",
      },
    ],
  });

  request
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
  return new Response("all good");
};
