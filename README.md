# Docusafe

Docusafe is a secure document storage and sharing application that combines encryption with decentralized verification using Solana blockchain. It allows users to store documents securely, share them with others, and verify their integrity without relying on centralized storage providers.

## Features

- **Encrypted Document Storage**: Documents are encrypted with a secret key generated by a master key provided by the user.
- **Decentralized Verification**: The hash of the encrypted file and its private key are stored on Solana, preventing tampering by the storage provider.
- **Secure Access Sharing**: Users can securely share access to documents with others, ensuring confidentiality.
- **Scalable and Cost-Effective**: Combines centralized storage for efficiency with decentralized verification for trust.

## How It Works

1. **Document Encryption**: When a user uploads a document, it is encrypted with a secret key derived from a master key. Only authorized users can decrypt the document.
2. **Blockchain Verification**: The hash of the encrypted document and the private key is stored on the Solana blockchain. This ensures that the data cannot be tampered with by the storage provider.
3. **Access Sharing**: Users can securely share access by providing others with the necessary decryption key, without exposing the document content to unauthorized parties.

## Technology Stack

- **Frontend**: React, Tailwind CSS, ShadCN
- **Backend**: Node.js, Solana Blockchain
- **Storage**: Amazon s3
- **Blockchain**: Solana (for decentralized verification)

## Installation

To get started with Docusafe locally, follow these steps:

### Prerequisites
- Node.js (version 14 or higher)
- Solana Wallet Adapter

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/joelvarghese6/docusafe.git
    ```

2. Install dependencies:
    ```bash
    cd DocuSafe
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open the application in your browser:
    ```bash
    http://localhost:3000
    ```

## Contributing

We welcome contributions! If you'd like to contribute to the project, feel free to fork the repository, make your changes, and submit a pull request.

Please follow these steps for contributing:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For more information, please contact [your-email@example.com](mailto:varghesejoel6@gmail.com).
