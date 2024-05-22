// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract documents432 {
    struct Document432 {
        string docHash;
        string content;
    }

    mapping(string => Document432) private documents;

    function storeDocument(string memory id, string memory content, string memory docHash) public {
        documents[id] = Document432(docHash, content);
    }

    function getDocument(string memory id) public view returns (string memory, string memory) {
        return (documents[id].content, documents[id].docHash);
    }
}



