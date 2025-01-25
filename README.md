# Ethereum-Cloud-Wallet

## About
Ethereum-Cloud-Wallet is a decentralized application (dApp) that allows users to securely store, manage, and interact with their Ethereum assets. The wallet leverages cloud storage for backup and recovery, ensuring that users can access their funds from anywhere.
![Uploading Screenshot 2025-01-25 at 11.09.54 PM.png…]()

## Features
- **Secure Storage**: Private keys are encrypted and stored securely.
- **Multi-Platform Access**: Access your wallet from multiple devices.
- **Transaction Management**: Send and receive Ethereum and ERC-20 tokens.
- **User-Friendly Interface**: Intuitive and easy-to-use interface for managing assets.

## Private Key Management
The primary aim of this application is to securely manage the private key of the user. To achieve this, we use Shamir's Secret Sharing algorithm to split the private key into multiple shards and store them in different databases. This ensures that the private key is never stored in a single location, enhancing security.

### Shamir's Secret Sharing Algorithm
1. **Private Key Generation**: When a wallet is created, a private key is generated.
2. **Sharding**: The private key is split into multiple shards using Shamir's Secret Sharing algorithm.
3. **Storage**: Each shard is stored in a different database.
4. **Reconstruction**: To reconstruct the private key, a minimum number of shards (threshold) are required. The shards are retrieved from the databases and combined to reconstruct the private key.

### Detailed Steps
1. **Generate Mnemonic**: A mnemonic phrase is generated and converted to a seed.
2. **Derive Private Key**: The seed is used to derive the private key.
3. **Split Private Key**: The private key is split into multiple shards.
4. **Store Shards**: Each shard is stored in a different database.
5. **Retrieve Shards**: When needed, the shards are retrieved from the databases.
6. **Combine Shards**: The retrieved shards are combined to reconstruct the private key.

## How It Works
1. **Wallet Creation**: Users can create a new wallet or import an existing one using a mnemonic phrase or private key.
2. **Encryption**: Private keys are encrypted using a secure algorithm before being stored.


## Getting Started
1. Clone the repository:
    ```sh
    git clone https://github.com/agastya18/Ethereum-Cloud-Wallet.git
    ```
2. Install dependencies:
    ```sh
    cd Ethereum-Cloud-Wallet
    npm install
    ```
3. Start the application:
    ```sh
    npm start
    ```

