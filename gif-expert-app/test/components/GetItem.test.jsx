const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe("Pruebas en GifItem", () => {
    const title = "Sample title";
    const url = "https://localhost/sample.jpg";
    test('debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem  title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
    test('debe mostar la imagen con el url y alt indicado', () => {
        render(<GifItem  title={title} url={url} />);
        // screen.debug();
        
    });
});
