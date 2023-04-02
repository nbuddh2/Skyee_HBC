import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SkyeeToken is ERC20 {
    constructor() ERC20("Skyee","SKY") {}

    function mintTestTokens(address _to, uint256 _value) external {
        _mint(_to, _value);
    }
}
