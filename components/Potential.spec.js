import Potential from '.'

describe("potential test", () => {
    it('should show potential detail when passing a correct potential number', () => {
        const potential = mount(<Potential supplyPoint={'12334'} />);

        expect(PotentialDetail).toBeInTheDocument();
    })
})