import { Youtube, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import YouTubeAdapterDemo from "./demo"

export default function YouTubeAdapterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">YouTube Adapter</h1>
        <p className="text-gray-400">Connect YouTube metrics to on-chain token economics through Chainlink oracles.</p>
      </div>

      <div className="border border-blue-800 bg-blue-950/30 rounded-lg p-4 mb-12">
        <div className="flex">
          <Info className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-medium text-white mb-2">YouTube Adapter Testnet Information</h2>
            <p className="text-sm text-blue-200 mb-3">
              The YouTube Adapter is currently deployed on our testnet. While the contract is functional, the metrics
              displayed in the demo are simulated for demonstration purposes.
            </p>
            <p className="text-sm text-blue-200">At mainnet launch, this adapter will:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-blue-200">
              <li>Connect to real YouTube channels via the YouTube API</li>
              <li>Process actual channel metrics (views, subscribers, engagement)</li>
              <li>Mint or burn tokens based on real performance data</li>
              <li>Distribute rewards to actual content creators and stakers</li>
              <li>Provide transparent, on-chain verification of all metrics</li>
            </ul>
            <p className="text-sm text-blue-200 mt-3">
              The security measures described, including node operation requirements and minimum staking, will be
              enforced on mainnet to ensure ecosystem integrity.
            </p>
          </div>
        </div>
      </div>

      {/* Demo Section - Moved to top for visibility */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Live Demo</h2>
        <p className="text-gray-400 mb-6">
          This demo shows real-time metrics from the official Diamondz Shadow YouTube channel and how they impact token
          economics.
        </p>
        <YouTubeAdapterDemo />
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Adapter Overview</h2>
        <p className="text-gray-400 mb-6">
          The YouTube Adapter is a core component of the Diamondz Shadow ecosystem that connects real-world YouTube
          metrics (views, subscribers, engagement) to on-chain token economics. This creates a direct link between
          content performance and token value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Key Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-white text-xs">1</span>
                </div>
                <span>Automated YouTube metrics collection</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-white text-xs">2</span>
                </div>
                <span>Chainlink oracle integration for secure data feeds</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-white text-xs">3</span>
                </div>
                <span>Algorithmic token minting/burning based on performance</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-white text-xs">4</span>
                </div>
                <span>Staking rewards distribution tied to channel growth</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Key Parameters</h3>
            <table className="w-full text-sm text-gray-400">
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">View Weight</td>
                  <td className="py-2">0.001 tokens per 1000 views</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Subscriber Weight</td>
                  <td className="py-2">0.1 tokens per subscriber</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Growth Multiplier</td>
                  <td className="py-2">1.5x for &gt;10% monthly growth</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Staking Reward Rate</td>
                  <td className="py-2">Percentage allocated to staking pool</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">Burn Threshold</td>
                  <td className="py-2">Triggered at &gt;5% subscriber loss</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6">
              <Link href="/blockchain/contracts">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded w-full">
                  <Youtube className="w-4 h-4 mr-2" />
                  View Contract Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Adapter Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">01</span>
            </div>
            <h3 className="font-bold mb-2">Fetch YouTube Metrics</h3>
            <p className="text-xs text-gray-400">
              Channel views, subscribers, and engagement data retrieved via YouTube API
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">02</span>
            </div>
            <h3 className="font-bold mb-2">Process via Oracle</h3>
            <p className="text-xs text-gray-400">
              Data validated and submitted on-chain through Chainlink oracle network
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">03</span>
            </div>
            <h3 className="font-bold mb-2">Smart Contract Execution</h3>
            <p className="text-xs text-gray-400">Metrics processed by smart contract to determine token actions</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">04</span>
            </div>
            <h3 className="font-bold mb-2">Token Actions</h3>
            <p className="text-xs text-gray-400">Automatic minting when metrics improve, burning when they decline</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">05</span>
            </div>
            <h3 className="font-bold mb-2">Reward Distribution</h3>
            <p className="text-xs text-gray-400">
              Newly minted tokens distributed to stakers based on contribution score
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <p className="text-gray-400 mb-6">
          Ready to connect your YouTube channel to the Diamondz Shadow ecosystem? Follow these enhanced security steps:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">For Content Creators</h3>
            <ol className="text-sm text-gray-400 list-decimal pl-5 space-y-2">
              <li>Connect your wallet to the Diamondz Shadow network</li>
              <li>Set up and run a validator node on the network</li>
              <li>Stake a minimum of 2,000 SDM tokens (~$2,000)</li>
              <li>Register your YouTube channel through secure verification</li>
              <li>Complete multi-factor authentication and identity verification</li>
              <li>Start earning rewards based on your content performance</li>
            </ol>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">For Developers</h3>
            <ol className="text-sm text-gray-400 list-decimal pl-5 space-y-2">
              <li>Explore the contract details and documentation</li>
              <li>Set up your development environment with our RPC endpoint</li>
              <li>Complete KYC verification for API access</li>
              <li>Use our SDK to integrate with your application</li>
              <li>Run security audits before deploying integrations</li>
              <li>Build new features on top of our YouTube Adapter</li>
            </ol>
          </div>
        </div>

        <div className="bg-black/40 p-4 rounded-lg mb-6">
          <h3 className="font-bold mb-2">Enhanced Security Measures</h3>
          <p className="text-sm text-gray-400 mb-4">
            To protect our ecosystem and ensure high-quality content, we've implemented the following security barriers:
          </p>
          <ul className="text-sm text-gray-400 list-disc pl-5 space-y-2">
            <li>
              <strong>Node Operation Requirement:</strong> All content creators must run validator nodes to participate
            </li>
            <li>
              <strong>Minimum Stake:</strong> 2,000 SDM tokens (~$2,000) must be staked to connect a channel
            </li>
            <li>
              <strong>Multi-layer Verification:</strong> Identity, channel ownership, and content authenticity checks
            </li>
            <li>
              <strong>Encrypted Data Transmission:</strong> All metrics are transmitted via secure, encrypted channels
            </li>
            <li>
              <strong>Decentralized Verification:</strong> Multiple nodes must verify metrics before rewards are issued
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="/blockchain/interact">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded mr-4">
              <Youtube className="w-4 h-4 mr-2" />
              Connect Your Channel
            </Button>
          </Link>
          <Link href="/blockchain/contracts">
            <Button variant="outline" className="rounded">
              <Youtube className="w-4 h-4 mr-2" />
              View Contract Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

