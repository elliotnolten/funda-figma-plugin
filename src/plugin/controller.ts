figma.showUI(__html__);

let count;

figma.ui.onmessage = async (message) => {
    if (message.type === "data") {
        const nodes = [];

        const items = JSON.parse(message.items);
        count = items.length;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const adres = item.Adres;
            const frame = figma.createFrame();
            frame.x = i * 150;
            frame.fills = [{type: "SOLID", color: {r: 1, g: 0.5, b: 0}}];
            const text = figma.createText();
            frame.appendChild(text);
            await figma.loadFontAsync({family: "Inter", style: "Regular"});
            text.characters = adres;
            figma.currentPage.appendChild(frame);
            nodes.push(frame);
        }

        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);

        // This is how figma responds back to the ui
        figma.ui.postMessage({
            type: "create-rectangles",
            message: `Created ${count} Rectangles`,
        });
    }

    figma.closePlugin();
};
