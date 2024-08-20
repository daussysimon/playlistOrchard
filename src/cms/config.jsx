const config = {
  backend: {
    name: "git-gateway",
    branch: "main", // Branch to update (optional; defaults to main)
  },
  local_backend: true,
  media_folder: "/public/files",
  public_folder: "/files",
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
        frame: false,
      },
      files: [
        {
          name: "home",
          label: "Home",
          file: "src/pages/home/index.md",
          description: "Home page informations",
          fields: [
            {
              name: "section1",
              label: "Section 1",
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
                  widget: "string",
                },
                {
                  name: "backgoundImage",
                  label: "Background Image",
                  widget: "image",
                },
                {
                  name: "buttonTitle1",
                  label: "Button title AirBnb",
                  widget: "string",
                },
                {
                  name: "buttonTitle2",
                  label: "Button title Shop",
                  widget: "string",
                },
              ],
            },
            {
              name: "section2",
              label: "Section 2",
              widget: "object",
              fields: [
                {
                  name: "guesthouseTitle",
                  label: "Guest house title",
                  widget: "string",
                },
                {
                  name: "guesthouseDescription",
                  label: "Guest house sescription",
                  widget: "text",
                },
                {
                  name: "guesthouseImage",
                  label: "Guest house image",
                  widget: "image",
                },

                // {
                //   name: "guesthouseTitle",
                //   label: "Guest house title",
                //   widget: "string",
                // },
                // {
                //   name: "guesthouseDescription",
                //   label: "Guest house sescription",
                //   widget: "text",
                // },
                // {
                //   name: "guesthouseImage",
                //   label: "Guest house image",
                //   widget: "string",
                // },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default config;
