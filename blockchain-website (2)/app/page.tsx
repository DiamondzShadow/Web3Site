import { ArrowRight, Film, Users, Coins, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LogoShowcase from "@/components/logo-showcase"

export default function Home() {
  return (
    <div className="relative">
      {/* Main Section */}
      <section className="pt-16 pb-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Diamondz Shadow Ecosystem</h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            A Layer 2 blockchain ecosystem for movie production and distribution, built on the OP Stack with Ethereum
            interoperability.
          </p>
          <LogoShowcase />
        </div>

        {/* Core Architecture */}
        <div className="border border-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
          <p className="text-gray-400 mb-4">
            The Diamondz Shadow ecosystem is built on a custom Layer 2 blockchain using the OP Stack, providing high
            throughput, low gas fees, and seamless interoperability with Ethereum. This infrastructure enables the
            implementation of our Proof of Contribution consensus mechanism.
          </p>
          <pre className="bg-black p-4 rounded-md text-sm overflow-x-auto mb-4">
            <code className="text-gray-300">
              {`// Layer 2 Architecture
- Base Layer: Ethereum (L1)
- Execution Layer: OP Stack (L2)
- Consensus: Proof of Contribution
- State Verification: Optimistic Rollups
- Data Availability: On-chain`}
            </code>
          </pre>
        </div>

        {/* YouTube Adapter Section */}
        <div className="border border-gray-800 rounded-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <Youtube className="h-6 w-6 text-gray-400 mr-2" />
            <h2 className="text-2xl font-bold">YouTube Adapter</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Connect YouTube metrics to on-chain token economics through Chainlink oracles. The adapter automatically
            processes channel views, subscribers, and engagement data to mint or burn tokens based on performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-black/40 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Metrics Collection</h3>
              <p className="text-sm text-gray-400">
                Automated collection of YouTube channel metrics via API integration
              </p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Oracle Integration</h3>
              <p className="text-sm text-gray-400">Secure on-chain data feeds via Chainlink oracle network</p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Token Economics</h3>
              <p className="text-sm text-gray-400">Algorithmic token minting/burning based on channel performance</p>
            </div>
          </div>

          <Link href="/integrations/youtube-adapter">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded">
              View YouTube Adapter Documentation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Core Components */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Core Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">SDM Token</h3>
              <p className="text-gray-400 mb-2">Utility token for governance, staking, and rewards.</p>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                <li>ERC-20 compatible</li>
                <li>Used for on-chain voting</li>
                <li>Staking for production funding</li>
                <li>Contributor compensation</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Community Governance</h3>
              <p className="text-gray-400 mb-2">On-chain voting system for production decisions.</p>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                <li>Proposal submission mechanism</li>
                <li>Weighted voting based on token holdings</li>
                <li>Executable on-chain decisions</li>
                <li>Transparent voting records</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Ad Revenue Integration</h3>
              <p className="text-gray-400 mb-2">YouTube and social media revenue tracking and distribution.</p>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                <li>YouTube Adapter for metrics processing</li>
                <li>Chainlink oracle data feeds</li>
                <li>Automated distribution via smart contracts</li>
                <li>Transparent revenue tracking</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Creative Economy</h3>
              <p className="text-gray-400 mb-2">On-chain payments for content contributors.</p>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                <li>Contribution tracking system</li>
                <li>Automated payment distribution</li>
                <li>Milestone-based releases</li>
                <li>Transparent payment history</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">NFT Integration</h3>
              <p className="text-gray-400 mb-2">Production-linked NFTs for collectibles and revenue.</p>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                <li>ERC-721 and ERC-1155 support</li>
                <li>Metadata storage on IPFS</li>
                <li>Royalty distribution mechanism</li>
                <li>L2 minting for low gas fees</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Proof of Contribution</h3>
              <p className="text-gray-400 mb-2">Consensus mechanism based on ecosystem contributions.</p>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                <li>Contribution metrics and scoring</li>
                <li>Validator selection algorithm</li>
                <li>Sybil resistance mechanisms</li>
                <li>Energy-efficient validation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation */}
        <div className="border border-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Smart Contract Architecture</h3>
              <p className="text-gray-400 mb-4">
                The ecosystem is implemented through a series of interconnected smart contracts handling governance,
                token economics, and content management.
              </p>
            </div>
            <div className="bg-black rounded-md p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DiamondShadowMovies {
    struct Movie {
        uint256 id;
        string title;
        address creator;
        uint256 totalContributions;
        uint256 revenueGenerated;
        bool isActive;
    }
    
    mapping(uint256 => Movie) public movies;
    uint256 public movieCount;
    
    event MovieCreated(uint256 id, string title, address creator);
    event ContributionMade(uint256 movieId, address contributor, uint256 amount);
    event RevenueDistributed(uint256 movieId, uint256 amount);
    
    function createMovie(string memory _title) public {
        movieCount++;
        movies[movieCount] = Movie(
            movieCount,
            _title,
            msg.sender,
            0,
            0,
            true
        );
        
        emit MovieCreated(movieCount, _title, msg.sender);
    }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Production Flow */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Production Flow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-gray-800 rounded-lg p-4">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                <span className="text-white font-mono">01</span>
              </div>
              <h3 className="font-bold mb-2">Proposal</h3>
              <p className="text-sm text-gray-400">
                Project proposals submitted on-chain with budget, timeline, and creative details.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-4">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                <span className="text-white font-mono">02</span>
              </div>
              <h3 className="font-bold mb-2">Voting</h3>
              <p className="text-sm text-gray-400">
                Token-weighted governance voting determines project funding and approval.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-4">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                <span className="text-white font-mono">03</span>
              </div>
              <h3 className="font-bold mb-2">Production</h3>
              <p className="text-sm text-gray-400">
                Milestone-based development with on-chain tracking and fund distribution.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-4">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
                <span className="text-white font-mono">04</span>
              </div>
              <h3 className="font-bold mb-2">Distribution</h3>
              <p className="text-sm text-gray-400">
                Multi-channel distribution with automated revenue collection and distribution.
              </p>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Technical Documentation</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/white-paper">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded">
                <Film className="w-4 h-4 mr-2" />
                White Paper
              </Button>
            </Link>
            <Link href="/developers">
              <Button variant="outline" className="rounded">
                <Users className="w-4 h-4 mr-2" />
                API Documentation
              </Button>
            </Link>
            <Link href="/blockchain/contracts">
              <Button variant="outline" className="rounded">
                <Coins className="w-4 h-4 mr-2" />
                Smart Contracts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

