const config = {
  backend: {
    name: "git-gateway",
    branch: "main", // Branch to update (optional; defaults to main)
  },
  local_backend: true,
  media_folder: "static/img",
  public_folder: "/img",
  slug: {
    encoding: "ascii",
    clean_accents: true,
    sanitize_replacement: "-",
  },
  editor: {
    preview: true,
    frame: false,
  },
  media_library: {
    max_file_size: 10240000,
    folder_support: false,
  },
  collections: [
    {
      name: "page",
      label: "Pages",
      delete: false,
      editor: {
        preview: true,
        frame: true,
      },
      files: [
        {
          name: "homePage",
          label: "Home",
          file: "/content/index.md",
          description: "Home page informations",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "index-page",
            },
            {
              name: "header",
              label: "Header",
              // summary: "{{fields.title}}: {{fields.description}}",
              widget: "object",
              fields: [
                {
                  name: "title",
                  label: "Title",
                  widget: "string",
                },
                {
                  name: "description",
                  label: "Description",
                  widget: "text",
                },
                {
                  name: "backgroundImage",
                  label: "Background Image",
                  widget: "image",
                },
                {
                  name: "button 1",
                  label: "Button 1",
                  widget: "object",
                  summary: "{{fields.label}}: {{fields.link}}",
                  fields: [
                    {
                      name: "label",
                      label: "Label",
                      widget: "string",
                    },
                    {
                      name: "link",
                      label: "Link",
                      widget: "string",
                    },
                  ],
                },
                {
                  name: "button 2",
                  label: "Button 2",
                  widget: "object",
                  summary: "{{fields.label}}: {{fields.link}}",
                  fields: [
                    {
                      name: "label",
                      label: "Label",
                      widget: "string",
                    },
                    {
                      name: "link",
                      label: "Link",
                      widget: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "section2",
              label: "Section 2",
              widget: "object",
              collapse: true,
              fields: [
                {
                  name: "part1",
                  label: "Part 1",
                  widget: "object",
                  fields: [
                    {
                      name: "title",
                      label: "Title",
                      widget: "string",
                    },
                    {
                      name: "desciption",
                      label: "Description",
                      widget: "text",
                    },
                    {
                      name: "image",
                      labe: "Image",
                      widget: "image",
                    },
                    {
                      name: "button",
                      label: "Button",
                      widget: "object",
                      summary: "{{fields.label}}: {{fields.link}}",
                      fields: [
                        {
                          name: "label",
                          label: "Label",
                          widget: "string",
                        },
                        {
                          name: "link",
                          label: "Link",
                          widget: "string",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "part2",
                  label: "Part 2",
                  widget: "object",
                  fields: [
                    {
                      name: "title",
                      label: "Title",
                      widget: "string",
                    },
                    {
                      name: "desciption",
                      label: "Description",
                      widget: "text",
                    },
                    {
                      name: "image",
                      labe: "Image",
                      widget: "image",
                    },
                    {
                      name: "button",
                      label: "Button",
                      widget: "object",
                      summary: "{{fields.label}}: {{fields.link}}",
                      fields: [
                        {
                          name: "label",
                          label: "Label",
                          widget: "string",
                        },
                        {
                          name: "link",
                          label: "Link",
                          widget: "string",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "aboutUs",
              label: "About us",
              widget: "object",
              fields: [
                { name: "text", label: "Description", widget: "text" },
                { name: "video", label: "Video", widget: "video" },
              ],
            },
          ],
        },
        {
          name: "shop",
          label: "The shop",
          file: "/content/theShop/index.md",
          description: "Shop page informations",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "theShop",
            },
            {
              name: "header",
              label: "Header",
              // summary: "{{fields.title}}: {{fields.description}}",
              widget: "object",
              fields: [
                {
                  name: "title",
                  label: "Title",
                  widget: "string",
                },
                {
                  name: "backgroundImage",
                  label: "Background Image",
                  widget: "image",
                },
              ],
            },
            {
              name: "shop",
              label: "The shop",
              widget: "object",
              collapse: true,
              fields: [
                {
                  name: "title",
                  label: "Title",
                  widget: "string",
                },
                {
                  name: "description",
                  label: "Description",
                  widget: "text",
                },
                {
                  name: "phoneNumber",
                  label: "Phone number",
                  widget: "string",
                },
                {
                  name: "appointment",
                  label: "Appointment button",
                  widget: "object",
                  require: false,
                  fields: [
                    { name: "label", label: "Label", widget: "string" },
                    { name: "link", label: "Link", widget: "string" },
                    { name: "visible", label: "Visible", widget: "boolean" },
                  ],
                },
              ],
            },
            {
              name: "market",
              label: "The markets",
              widget: "object",
              collapse: true,
              fields: [
                {
                  name: "title",
                  label: "Title",
                  widget: "string",
                },
                {
                  name: "description",
                  label: "Description",
                  widget: "text",
                },
                {
                  name: "marketList",
                  label: "Markets List",
                  widget: "list",
                  fields: [
                    {
                      name: "town",
                      label: "Town",
                      widget: "string",
                    },
                    {
                      name: "months",
                      label: "Months",
                      widget: "object",
                      fields: [
                        { name: "start", label: "Start", widget: "string" },
                        { name: "end", label: "End", widget: "string" },
                      ],
                    },
                    {
                      name: "openingTime",
                      label: "Opening time ",
                      widget: "object",
                      fields: [
                        { name: "start", label: "Start", widget: "string" },
                        { name: "end", label: "End", widget: "string" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "guestHouse",
          label: "The guest house",
          file: "/content/guesthouse/index.md",
          description: "Guest house page informations",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "guestHouse",
            },
            {
              name: "header",
              label: "Header",
              // summary: "{{fields.title}}: {{fields.description}}",
              widget: "object",
              fields: [
                {
                  name: "title",
                  label: "Title",
                  widget: "string",
                },
                {
                  name: "backgoundImage",
                  label: "Background Image",
                  widget: "image",
                },
                {
                  name: "button",
                  label: "Button",
                  widget: "object",
                  summary: "{{fields.label}}: {{fields.link}}",
                  fields: [
                    {
                      name: "label",
                      label: "Label",
                      widget: "string",
                    },
                    {
                      name: "link",
                      label: "Link",
                      widget: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "description",
              label: "Description",
              widget: "text",
            },
            {
              name: "bookingButton",
              label: "Booking Button",
              widget: "object",
              fields: [
                {
                  name: "label",
                  label: "Label",
                  widget: "string",
                },
                {
                  name: "link",
                  label: "Link",
                  widget: "string",
                },
              ],
            },
            {
              name: "amenties",
              label: "Amenities",
              widget: "list",
              fields: [
                {
                  name: "amenitie",
                  label: "Amenitie",
                  widget: "string",
                },
              ],
            },
            {
              name: "bookingPolicies",
              label: "Booking policies",
              widget: "list",
              fields: [
                {
                  name: "policie",
                  label: "Policie",
                  widget: "string",
                },
              ],
            },
            {
              name: "gallery",
              label: "Image gallery",
              widget: "image-gallery",
            },
          ],
        },
        {
          name: "contact",
          label: "Contact informations",
          file: "/content/contact/index.md",
          description: "Contact page informations",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "contact",
            },

            {
              label: "Page Title",
              name: "title",
              widget: "string",
            },
            {
              label: "Descirption",
              name: "description",
              widget: "text",
            },
            {
              label: "Phone number",
              name: "phoneNumber",
              widget: "string",
            },
            {
              label: "Email Adress",
              name: "emailAdress",
              widget: "string",
            },
            {
              label: "Adresses",
              name: "adresses",
              widget: "list",
              fields: [
                {
                  label: "Adress",
                  name: "adress",
                  widget: "string",
                },
              ],
            },
            {
              label: "Shop localisation",
              name: "shopLocalisation",
              widget: "map",
            },
          ],
        },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      delete: false,
      icon: "setting",
      files: [
        {
          name: "ui",
          label: "Settings",
          file: "/content/settings/index.md",
          description: "website settings",
          fields: [
            {
              label: "Template Key",
              name: "templateKey",
              widget: "hidden",
              default: "ui",
            },
            {
              label: "Logo",
              name: "logo",
              widget: "image",
            },

            {
              label: "Menu",
              name: "menu",
              widget: "list",
              label_singular: " a link",
              fields: [{ name: "link", label: "Link", widget: "link" }],
            },
          ],
        },
      ],
    },
    {
      name: "news",
      label: "News",
      folder: "/content/news",
      icon: "news",
      create: true,
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "news",
        },
        { name: "title", label: "Title", widget: "string" },
        { name: "test", label: "test", whidget: "markdown" },
        {
          name: "date",
          label: "Publish Date",
          widget: "datetime",
        },
        { name: "thumbnail", label: "Featured Image", widget: "image" },
        { name: "body", label: "Body", widget: "markdown" },
      ],
    },
    {
      name: "categories",
      label: "Categories",
      folder: "/content/categories",
      icon: "categories",
      create: true,
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "categories",
        },
        { name: "title", label: "Name", widget: "string" },
        { name: "description", label: "Description", widget: "text" },
      ],
    },
    {
      name: "products",
      label: "Products",
      folder: "/content/products",
      icon: "products",
      create: true,
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "products",
        },
        { name: "title", label: "Name", widget: "string" },
        { name: "description", label: "Description", widget: "text" },
        { name: "image", label: "Picture", widget: "image" },
        {
          name: "categorie",
          label: "Categorie",
          widget: "relation",
          collection: "categories",
          search_fields: ["title"],
          value_field: "{{title}}",
        },
        {
          name: "ingredients",
          label: "Ingredients",
          widget: "list",
          fields: [{ name: "name", label: "name", widget: "string" }],
        },
        {
          name: "price",
          label: "Price",
          widget: "list",
          fields: [
            { name: "quantity", label: "Quantity", widget: "string" },
            { name: "price", label: "Price", widget: "number" },
          ],
        },
      ],
    },
  ],
};

export default config;
