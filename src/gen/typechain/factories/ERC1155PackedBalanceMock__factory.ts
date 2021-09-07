/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC1155PackedBalanceMock } from "../ERC1155PackedBalanceMock";

export class ERC1155PackedBalanceMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155PackedBalanceMock> {
    return super.deploy(overrides || {}) as Promise<ERC1155PackedBalanceMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155PackedBalanceMock {
    return super.attach(address) as ERC1155PackedBalanceMock;
  }
  connect(signer: Signer): ERC1155PackedBalanceMock__factory {
    return super.connect(signer) as ERC1155PackedBalanceMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155PackedBalanceMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155PackedBalanceMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "batchBurnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "batchMintMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burnMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getIDBinIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "bin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_binValues",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getValueInBin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "mintMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612796806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c8063a3f091f51161008c578063db90e83c11610066578063db90e83c14610221578063e985e9c514610242578063eaec5f8114610255578063f242432a14610268576100e9565b8063a3f091f5146101e8578063bd7a6c41146101fb578063d7a0ad901461020e576100e9565b80632eb2c2d6116100c85780632eb2c2d61461018d578063437ecbe9146101a25780634e1273f4146101b5578063a22cb465146101d5576100e9565b8062fdd58e1461012457806301ffc9a71461014d5780630e89341c1461016d575b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011b90612359565b60405180910390fd5b6101376101323660046120b1565b61027b565b60405161014491906123b6565b60405180910390f35b61016061015b366004612220565b6102d0565b60405161014491906122dd565b61018061017b366004612260565b6102e3565b60405161014491906122e8565b6101a061019b366004611e68565b610436565b005b6101a06101b03660046120da565b610541565b6101c86101c336600461215f565b610551565b6040516101449190612299565b6101a06101e3366004612077565b6107d0565b6101a06101f636600461210c565b610869565b6101a0610209366004611f71565b61087b565b6101a061021c366004611fe2565b610886565b61023461022f366004612260565b610892565b6040516101449291906123bf565b610160610250366004611e36565b61089f565b610137610263366004612278565b6108da565b6101a0610276366004611f0e565b6108ed565b600080600061028984610892565b73ffffffffffffffffffffffffffffffffffffffff871660009081526020818152604080832085845290915290205491935091506102c790826108da565b95945050505050565b60006102db826109f1565b90505b919050565b606060026102f083610a4e565b604051602001808380546001816001161561010002031660029004801561034e5780601f1061032c57610100808354040283529182019161034e565b820191906000526020600020905b81548152906001019060200180831161033a575b5050825160208401908083835b6020831061039857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161035b565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790527f2e6a736f6e000000000000000000000000000000000000000000000000000000920191825250604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe50181526005909201905295945050505050565b3373ffffffffffffffffffffffffffffffffffffffff8616148061045f575061045f853361089f565b6104b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c81526020018061257e603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610520576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180612449603d913960400191505060405180910390fd5b61052c85858585610b7a565b61053a858585855a86610f87565b5050505050565b61054c8383836111fe565b505050565b815181516060919081146105b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806124106039913960400191505060405180910390fd5b6000806105d0856000815181106105c357fe5b6020026020010151610892565b915091506000806000886000815181106105e657fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020549050600083905060608567ffffffffffffffff8111801561065a57600080fd5b50604051908082528060200260200182016040528015610684578160200160208202803683370190505b50905061069183856108da565b8160008151811061069e57fe5b602090810291909101015260015b868110156107c3576106c38982815181106105c357fe5b9096509450828614158061072c57508981815181106106de57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168a600183038151811061070b57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b1561079a576000808b838151811061074057fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000205493508592505b6107a484866108da565b8282815181106107b057fe5b60209081029190910101526001016106ac565b5098975050505050505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61087584848484611268565b50505050565b61054c8383836112dc565b61087584848484611485565b6008810491600790911690565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b6020810282901c63ffffffff1692915050565b3373ffffffffffffffffffffffffffffffffffffffff861614806109165750610916853361089f565b61096b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806124b96037913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166109d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806126746038913960400191505060405180910390fd5b6109e38585858561170f565b61053a858585855a866117b3565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c000000000000000000000000000000000000000000000000000000001415610a45575060016102de565b6102db826119a4565b606081610a8f575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526102de565b818060005b8215610aa857600101600a83049250610a94565b60608167ffffffffffffffff81118015610ac157600080fd5b506040519080825280601f01601f191660200182016040528015610aec576020820181803683370190505b5090507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b8315610b7057600a840660300160f81b82828060019003935081518110610b3657fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350610b13565b5095945050505050565b815181518114610bd5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260428152602001806124f06042913960600191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610c115750600081115b15610de357600080610c29856000815181106105c357fe5b73ffffffffffffffffffffffffffffffffffffffff8916600090815260208181526040808320858452909152812054875193955091935091610c819190849088908590610c7257fe5b60200260200101516001611a01565b73ffffffffffffffffffffffffffffffffffffffff881660009081526020818152604080832087845290915281205487519293509091610cd79190859089908590610cc857fe5b60200260200101516000611a01565b90508360015b86811015610d9157610cf48982815181106105c357fe5b9096509450818614610d635773ffffffffffffffffffffffffffffffffffffffff8b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b610d7484868a8481518110610c7257fe5b9350610d8783868a8481518110610cc857fe5b9250600101610cdd565b505073ffffffffffffffffffffffffffffffffffffffff808a16600090815260208181526040808320888452825280832095909555918a16815280825283812095815294905292209190915550610e80565b60005b81811015610e7e57828181518110610dfa57fe5b6020026020010151610e1f87868481518110610e1257fe5b602002602001015161027b565b1015610e76576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806125f76036913960400191505060405180910390fd5b600101610de6565b505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610f2c578181015183820152602001610f14565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610f6b578181015183820152602001610f53565b5050505090500194505050505060405180910390a45050505050565b610fa68573ffffffffffffffffffffffffffffffffffffffff16611c14565b156111f65760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561105e578181015183820152602001611046565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561109d578181015183820152602001611085565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156110d95781810151838201526020016110c1565b50505050905090810190601f1680156111065780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b15801561112b57600080fd5b5087f115801561113f573d6000803e3d6000fd5b50505050506040513d602081101561115657600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146111f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604c815260200180612532604c913960600191505060405180910390fd5b505b505050505050565b61120b8383836001611c4e565b6040805183815260208101839052815160009273ffffffffffffffffffffffffffffffffffffffff87169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a4505050565b6112758484846000611c4e565b6040805184815260208101849052815173ffffffffffffffffffffffffffffffffffffffff87169260009233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a461087560008585855a866117b3565b815181518114611337576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806125ba603d913960400191505060405180910390fd5b60005b8181101561137d576113758585838151811061135257fe5b602002602001015185848151811061136657fe5b60200260200101516001611c4e565b60010161133a565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561142b578181015183820152602001611413565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561146a578181015183820152602001611452565b5050505090500194505050505060405180910390a450505050565b81518351146114df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e8152602001806126f1603e913960400191505060405180910390fd5b8251156115ff576000806114f9856000815181106105c357fe5b73ffffffffffffffffffffffffffffffffffffffff88166000908152602081815260408083208584529091528120548751939550919350916115429190849088908590610cc857fe5b86519091508360015b828110156115c6576115628982815181106105c357fe5b90965094508186146115ab5773ffffffffffffffffffffffffffffffffffffffff8a16600090815260208181526040808320948352939052828120949094558584529220549184905b6115bc84868a8481518110610cc857fe5b935060010161154b565b50505073ffffffffffffffffffffffffffffffffffffffff87166000908152602081815260408083209583529490529290922091909155505b8373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156116ac578181015183820152602001611694565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156116eb5781810151838201526020016116d3565b5050505090500194505050505060405180910390a461087560008585855a86610f87565b61171c8483836001611c4e565b6117298383836000611c4e565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051808381526020018281526020019250505060405180910390a450505050565b6117d28573ffffffffffffffffffffffffffffffffffffffff16611c14565b156111f65760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561188b578181015183820152602001611873565b50505050905090810190601f1680156118b85780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b1580156118db57600080fd5b5087f11580156118ef573d6000803e3d6000fd5b50505050506040513d602081101561190657600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146111f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604781526020018061262d6047913960600191505060405180910390fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014156119f8575060016102de565b6102db82611cd5565b60006020840263ffffffff82846001811115611a1957fe5b1415611ae75784821b8701925086831015611a7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061272f6032913960400191505060405180910390fd5b64010000000087831c8216860110611ae2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061272f6032913960400191505060405180910390fd5b611c0a565b6001846001811115611af557fe5b1415611bb95784821b8703925086831115611b5b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260338152602001806124866033913960400191505060405180910390fd5b84818389901c161015611ae2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260338152602001806124866033913960400191505060405180910390fd5b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260458152602001806126ac6045913960600191505060405180910390fd5b5050949350505050565b6000813f8015801590611c4757507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b600080611c5a85610892565b73ffffffffffffffffffffffffffffffffffffffff88166000908152602081815260408083208584529091529020549193509150611c9a90828686611a01565b73ffffffffffffffffffffffffffffffffffffffff909616600090815260208181526040808320948352939052919091209490945550505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146102de57600080fd5b600082601f830112611d53578081fd5b8135611d66611d61826123f1565b6123cd565b818152915060208083019084810181840286018201871015611d8757600080fd5b60005b84811015611da657813584529282019290820190600101611d8a565b505050505092915050565b600082601f830112611dc1578081fd5b813567ffffffffffffffff811115611dd557fe5b611e0660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016123cd565b9150808252836020828501011115611e1d57600080fd5b8060208401602084013760009082016020015292915050565b60008060408385031215611e48578182fd5b611e5183611d1f565b9150611e5f60208401611d1f565b90509250929050565b600080600080600060a08688031215611e7f578081fd5b611e8886611d1f565b9450611e9660208701611d1f565b9350604086013567ffffffffffffffff80821115611eb2578283fd5b611ebe89838a01611d43565b94506060880135915080821115611ed3578283fd5b611edf89838a01611d43565b93506080880135915080821115611ef4578283fd5b50611f0188828901611db1565b9150509295509295909350565b600080600080600060a08688031215611f25578081fd5b611f2e86611d1f565b9450611f3c60208701611d1f565b93506040860135925060608601359150608086013567ffffffffffffffff811115611f65578182fd5b611f0188828901611db1565b600080600060608486031215611f85578283fd5b611f8e84611d1f565b9250602084013567ffffffffffffffff80821115611faa578384fd5b611fb687838801611d43565b93506040860135915080821115611fcb578283fd5b50611fd886828701611d43565b9150509250925092565b60008060008060808587031215611ff7578384fd5b61200085611d1f565b9350602085013567ffffffffffffffff8082111561201c578485fd5b61202888838901611d43565b9450604087013591508082111561203d578384fd5b61204988838901611d43565b9350606087013591508082111561205e578283fd5b5061206b87828801611db1565b91505092959194509250565b60008060408385031215612089578182fd5b61209283611d1f565b9150602083013580151581146120a6578182fd5b809150509250929050565b600080604083850312156120c3578182fd5b6120cc83611d1f565b946020939093013593505050565b6000806000606084860312156120ee578283fd5b6120f784611d1f565b95602085013595506040909401359392505050565b60008060008060808587031215612121578384fd5b61212a85611d1f565b93506020850135925060408501359150606085013567ffffffffffffffff811115612153578182fd5b61206b87828801611db1565b60008060408385031215612171578081fd5b823567ffffffffffffffff80821115612188578283fd5b818501915085601f83011261219b578283fd5b81356121a9611d61826123f1565b80828252602080830192508086018a8283870289010111156121c9578788fd5b8796505b848710156121f2576121de81611d1f565b8452600196909601959281019281016121cd565b509096508701359350505080821115612209578283fd5b5061221685828601611d43565b9150509250929050565b600060208284031215612231578081fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611c47578182fd5b600060208284031215612271578081fd5b5035919050565b6000806040838503121561228a578182fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b818110156122d1578351835292840192918401916001016122b5565b50909695505050505050565b901515815260200190565b6000602080835283518082850152825b81811015612314578581018301518582016040015282016122f8565b818111156123255783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60208082526034908201527f455243313135354d6574614d696e744275726e5061636b656442616c616e636560408201527f4d6f636b3a20494e56414c49445f4d4554484f44000000000000000000000000606082015260800190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff811182821017156123e957fe5b604052919050565b600067ffffffffffffffff82111561240557fe5b506020908102019056fe455243313135355061636b656442616c616e63652362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e475448455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20554e444552464c4f57455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e5061636b656442616c616e63652362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20554e444552464c4f57455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20494e56414c49445f42494e5f57524954455f4f5045524154494f4e455243313135354d696e744275726e5061636b656442616c616e6365235f62617463684d696e743a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a204f564552464c4f57a26469706673582212202e80f0f6e5ff1e132d6843dccf49f13772dd0eb76e707f0541dbac0b4f1aac8a64736f6c63430007040033";
