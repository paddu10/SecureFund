🔐 SecureFund

Blockchain-Based Transparent Donation Platform

SecureFund is a blockchain-based donation platform designed to improve transparency, transaction verification, and trust in online donations. It combines React.js, Firebase, and Ethereum smart contracts to provide secure user management, NGO campaigns, donation tracking, and verifiable blockchain transactions.

---

🚀 Features

👤 Donor

- Secure registration and login
- Browse NGO campaigns
- Make donations using MetaMask
- View donation history
- Track transactions
- Verify blockchain transaction hashes

🏢 NGO

- NGO registration and profile
- Create and manage campaigns
- View received donations
- Track campaign progress
- View transaction records

🛡️ Admin

- Manage users
- Verify NGOs
- Approve campaigns
- Monitor donations
- View platform statistics

⛓️ Blockchain

- Solidity smart contracts
- Ethereum Sepolia Testnet
- Immutable transaction records
- Transparent donation tracking
- MetaMask integration
- Transaction hash verification

---

🛠️ Tech Stack

- Frontend: React.js, Tailwind CSS
- Authentication: Firebase Authentication
- Database: Cloud Firestore
- Blockchain: Ethereum, Sepolia Testnet
- Smart Contract: Solidity
- Wallet: MetaMask
- Blockchain Library: Ethers.js
- Development: Hardhat, Node.js

---

🌳 Project Architecture

SecureFund
│
├── Frontend
│   ├── React.js
│   └── Tailwind CSS
│
├── Authentication
│   └── Firebase Authentication
│
├── Database
│   └── Cloud Firestore
│
├── Blockchain
│   ├── Solidity Smart Contract
│   ├── Ethers.js
│   ├── MetaMask
│   └── Sepolia Testnet
│
└── User Roles
    ├── Donor
    ├── NGO
    └── Admin

---

🔄 How It Works

User
 │
 ├── Donor ──→ Select Campaign ──→ Donate
 │                                  │
 ├── NGO ────→ Create Campaign     ▼
 │                         MetaMask Wallet
 │                                  │
 └── Admin ──→ Verify NGO            ▼
                         Smart Contract
                                  │
                                  ▼
                         Ethereum Sepolia
                                  │
                                  ▼
                           Transaction Hash
                                  │
                                  ▼
                              Firestore

---

⚙️ Installation

1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/SecureFund.git
cd SecureFund

2. Install Dependencies

npm install

3. Configure Firebase

Create a Firebase project and enable:

- Firebase Authentication
- Cloud Firestore

Add your Firebase configuration to the environment variables.

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_app_id

4. Configure Blockchain

Connect MetaMask to the Sepolia Testnet and add the deployed smart contract address.

VITE_CONTRACT_ADDRESS=your_contract_address

5. Run the Application

npm run dev

The application will normally run at:

http://localhost:5173

---

🔮 Future Scope

- AI-based suspicious transaction detection
- Automated NGO verification
- IPFS-based document storage
- Multi-chain support
- UPI and traditional payment integration
- Mobile application
- Advanced donation analytics
- Automated compliance verification

---

🎯 Objective

The objective of SecureFund is to demonstrate how blockchain, smart contracts, cloud services, and modern web technologies can be integrated to create a more transparent and verifiable donation ecosystem.

---

👨‍💻 Project

SecureFund — Blockchain-Based Donation Platform

"React.js" • "Tailwind CSS" • "Firebase" • "Solidity" • "Ethereum" • "Sepolia" • "MetaMask" • "Ethers.js" • "Hardhat"

«Note: SecureFund is an academic/research prototype developed for demonstrating blockchain-based donation tracking and verification.»