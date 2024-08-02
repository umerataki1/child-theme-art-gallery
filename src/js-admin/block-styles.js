// EXAMPLE_CODE This is example, you may remove
wp.domReady(() => {
    wp.blocks.registerBlockStyle("core/columns", [
        {
            name: "equal-height",
            label: "Equal Height",
        },
        {
            name: "reverse",
            label: "Reverse On Mobile Devices"
        }
    ]);

    wp.blocks.registerBlockStyle("core/column", [
        {
            name: "sticky-column",
            label: "Sticky",
        }
    ]);

    wp.blocks.registerBlockStyle("core/button", [
        {
            name: "outline-green",
            label: "Outline Green",
        },
        {
            name: "read-more-link",
            label: "Read More",
        },
        {
            name: "fill-big",
            label: "Fill Big"
        }
    ]);
    wp.blocks.registerBlockStyle("core/gallery", [
        {
            name: "vertically-centered",
            label: "Vertically Centered",
        }
    ]);
    wp.blocks.registerBlockStyle("core/cover", [
        {
            name: "just-image",
            label: "Just Image",
        }
    ]);
    wp.blocks.registerBlockStyle("core/group", [
        {
            name: "full-width-on-small-devices",
            label: "Full Width - Small Devices",
        }
    ]);
});

