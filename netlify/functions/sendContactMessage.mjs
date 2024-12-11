/* eslint-disable import/no-anonymous-default-export */

import Mailjet from "node-mailjet";

const envData = {
  MAILJET_API: "707bb9a8014c8b8c127ff7f448236e24",
  MAILJET_PASSWORD: "6f784dcb3b83c27b5bfc2bc9cd803f32",
};

export default async (req, context) => {
  const data = await req.json();

  let err = false;

  const mailjet = Mailjet.apiConnect(
    envData.MAILJET_API,
    envData.MAILJET_PASSWORD,
    {
      config: {},
      options: {},
    }
  );

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(data.email)) {
    err = true;
  }

  Object.keys(data).forEach((it) => {
    if (data[it]?.length <= 0 || data[it.length > 300]) {
      err = true;
    }
  });

  if (!err) {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "contactform@tropicwavestudio.com",
            Name: `Contact form`,
          },
          To: [
            {
              Email: data.sentTo,
              Name: "passenger 1",
            },
          ],
          Subject: "New message from contact form",
          HTMLPart: `<p>name: ${data.name}</p><p> email: ${data.email}</p><p> ${data.message}</p>`,
        },
      ],
    });
    if (request.response.status === 200) {
      return new Response("good");
    } else {
      return new Response("error");
    }
  } else {
    return new Response("error");
  }
};
