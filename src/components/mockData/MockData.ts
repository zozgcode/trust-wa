import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      email: 'a*@gmail.com',
      username: 'sample1',
      password: 'sample1'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'February 08, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1n2s....hs6jd6u881',
        status: 'Success',
        quantity: 0.62,
        amount_in_usd: 60000.0,
        assets: 'BTC'
      },
      {
        date: 'January 22, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4h....22w7z3rld8',
        status: 'Success',
        quantity: 0.094,
        amount_in_usd: 10000.0,
        assets: 'BTC'
      },
      {
        date: 'January 17, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2l....06x9zrhm3',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 15, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9l....7nt2v9z4h5',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 7, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7m....n3v09lr72',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'December 22, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2r....xnzt7dprm8',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 19, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q8k....9ld07rhmp2',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 10, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q3v....7xlj04rmn28',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'November 29, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5x....n8z23r02dl',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qhl7znnt6uj4kcez96az2lt9x3w8lax46hvfv2j',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 4.79
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A880b1841B4b7A94ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A880b1841B4b7A94ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      full_name: 'Sharon Little',
      jointAccount: false,
      email: 's@gmail.com',
      username: 'SharoLit',
      password: 'Slit_233'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg:
        'Your account has been successfully activated for withdrawals. To learn about your transfer charges, please reach out to our customer care team at smithhelpt2314@gmail.com.',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'February 08, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1n2s....hs6jd6u881',
        status: 'Success',
        quantity: 0.62,
        amount_in_usd: 60000.0,
        assets: 'BTC'
      },
      {
        date: 'January 22, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4h....22w7z3rld8',
        status: 'Success',
        quantity: 0.094,
        amount_in_usd: 10000.0,
        assets: 'BTC'
      },
      {
        date: 'January 17, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2l....06x9zrhm3',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 15, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9l....7nt2v9z4h5',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 7, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q7m....n3v09lr72',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'December 22, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q2r....xnzt7dprm8',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 19, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q8k....9ld07rhmp2',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'January 10, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q3v....7xlj04rmn28',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'November 29, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5x....n8z23r02dl',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qhl7znnt6uj4kcez96az2lt9x3w8lax46hvfv2j',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 4.79
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A880b1841B4b7A94ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A880b1841B4b7A94ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      full_name: 'Liam & Monique',
      jointAccount: true,
      email: 'l@gmail.com',
      username: 'Liam&monique',
      password: 'Loveforever2'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg:
        'Your account has been successfully activated for withdrawals. To learn about your transfer charges, please reach out to our customer care team at smithhelpt2314@gmail.com.',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        date: 'February 26, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qxy7...4vn',
        status: 'Success',
        quantity: 9.27,
        amount_in_usd: 800000.0,
        assets: 'BTC'
      },
      {
        date: 'February 17, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1q9h2...k85',
        status: 'Success',
        quantity: 0.68,
        amount_in_usd: 58750.0,
        assets: 'BTC'
      },
      {
        date: 'February 05, 2025',
        description: 'Transfer BTC',
        walletAddress: '3J98t1...NLy',
        status: 'Success',
        quantity: -0.56,
        amount_in_usd: -48500.0,
        assets: 'BTC'
      },
      {
        date: 'January 29, 2025',
        description: 'Transfer BTC',
        walletAddress: 'bc1qar0...mdq',
        status: 'Success',
        quantity: -1.39,
        amount_in_usd: 120400.0,
        assets: 'BTC'
      },
      {
        date: 'January 14, 2025',
        description: 'Deposit BTC',
        walletAddress: 'bc1qc7s...tk9',
        status: 'Success',
        quantity: 0.91,
        amount_in_usd: 78300.0,
        assets: 'BTC'
      },
      {
        date: 'January 02, 2025',
        description: 'Transfer BTC',
        walletAddress: 'bc1q4c0...hl7',
        status: 'Success',
        quantity: -0.59,
        amount_in_usd: 50600.0,
        assets: 'BTC'
      },
      {
        date: 'December 27, 2024',
        description: 'Transfer BTC',
        walletAddress: '1BoatS...pyT',
        status: 'Success',
        quantity: -0.96,
        amount_in_usd: 82900.0,
        assets: 'BTC'
      },
      {
        date: 'December 15, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q5sh...8v2',
        status: 'Success',
        quantity: 0.47,
        amount_in_usd: 40500.0,
        assets: 'BTC'
      },
      {
        date: 'December 03, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qkhc...zpw',
        status: 'Success',
        quantity: 0.71,
        amount_in_usd: 61300.0,
        assets: 'BTC'
      },
      {
        date: 'November 28, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qmxd...h4k',
        status: 'Success',
        quantity: -2.72,
        amount_in_usd: 142000.0,
        assets: 'BTC'
      },
      {
        date: 'November 16, 2024',
        description: 'Deposit BTC',
        walletAddress: '3FZbgi...Zc5',
        status: 'Success',
        quantity: 0.83,
        amount_in_usd: 42300.0,
        assets: 'BTC'
      },
      {
        date: 'November 07, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1q2x4...6v4',
        status: 'Success',
        quantity: -1.26,
        amount_in_usd: 63800.0,
        assets: 'BTC'
      },
      {
        date: 'October 25, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qr4d...fpx',
        status: 'Success',
        quantity: -1.88,
        amount_in_usd: 94700.0,
        assets: 'BTC'
      },
      {
        date: 'October 14, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qewe...nkj',
        status: 'Success',
        quantity: 0.95,
        amount_in_usd: 47100.0,
        assets: 'BTC'
      },
      {
        date: 'October 05, 2024',
        description: 'Transfer BTC',
        walletAddress: '1F1tAa...qX',
        status: 'Success',
        quantity: -1.37,
        amount_in_usd: 67500.0,
        assets: 'BTC'
      },
      {
        date: 'September 29, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qe5h...rgj',
        status: 'Success',
        quantity: -3.12,
        amount_in_usd: 152000.0,
        assets: 'BTC'
      },
      {
        date: 'September 18, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qj2s...nwk',
        status: 'Success',
        quantity: 1.24,
        amount_in_usd: 59800.0,
        assets: 'BTC'
      },
      {
        date: 'September 07, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qwqd...zej',
        status: 'Success',
        quantity: -0.67,
        amount_in_usd: 32100.0,
        assets: 'BTC'
      },
      {
        date: 'August 27, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1quka...faj',
        status: 'Success',
        quantity: -2.45,
        amount_in_usd: 116300.0,
        assets: 'BTC'
      },
      {
        date: 'August 16, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1q42l...pcc',
        status: 'Success',
        quantity: 1.07,
        amount_in_usd: 50400.0,
        assets: 'BTC'
      },
      {
        date: 'August 05, 2024',
        description: 'Transfer BTC',
        walletAddress: '3P3QsM...rjt',
        status: 'Success',
        quantity: -0.78,
        amount_in_usd: 36500.0,
        assets: 'BTC'
      },
      {
        date: 'July 28, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1q9s0...h2z',
        status: 'Success',
        quantity: -1.76,
        amount_in_usd: 81900.0,
        assets: 'BTC'
      },
      {
        date: 'July 17, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qr29...n76',
        status: 'Success',
        quantity: 0.91,
        amount_in_usd: 42100.0,
        assets: 'BTC'
      },
      {
        date: 'July 06, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qtl0...fsm',
        status: 'Success',
        quantity: -1.35,
        amount_in_usd: 62200.0,
        assets: 'BTC'
      },
      {
        date: 'June 29, 2024',
        description: 'Transfer BTC',
        walletAddress: '1Mz715...BWX',
        status: 'Success',
        quantity: -2.34,
        amount_in_usd: 107600.0,
        assets: 'BTC'
      },
      {
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qg3x...m7z',
        status: 'Success',
        quantity: 0.88,
        amount_in_usd: 40100.0,
        assets: 'BTC'
      },
      {
        date: 'June 07, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qv9m...cpj',
        status: 'Success',
        quantity: -1.17,
        amount_in_usd: 53300.0,
        assets: 'BTC'
      },
      {
        date: 'May 29, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qm34...s3h',
        status: 'Success',
        quantity: -3.05,
        amount_in_usd: 138200.0,
        assets: 'BTC'
      },
      {
        date: 'May 16, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qnjg...f9g',
        status: 'Success',
        quantity: 0.74,
        amount_in_usd: 33400.0,
        assets: 'BTC'
      },
      {
        date: 'May 05, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1q4u3...jty',
        status: 'Success',
        quantity: -1.29,
        amount_in_usd: 58100.0,
        assets: 'BTC'
      },
      {
        date: 'April 28, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qs62...0m3',
        status: 'Success',
        quantity: -1.92,
        amount_in_usd: 85600.0,
        assets: 'BTC'
      },
      {
        date: 'April 17, 2024',
        description: 'Deposit BTC',
        walletAddress: '3BbDtx...diQ',
        status: 'Success',
        quantity: 0.85,
        amount_in_usd: 37700.0,
        assets: 'BTC'
      },
      {
        date: 'April 06, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1q7gg...jr7',
        status: 'Success',
        quantity: -1.13,
        amount_in_usd: 50000.0,
        assets: 'BTC'
      },
      {
        date: 'March 28, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qrp3...mv3',
        status: 'Success',
        quantity: -2.63,
        amount_in_usd: 115800.0,
        assets: 'BTC'
      },
      {
        date: 'March 17, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qcr8...fyu',
        status: 'Success',
        quantity: 0.96,
        amount_in_usd: 42100.0,
        assets: 'BTC'
      },
      {
        date: 'March 05, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1q5qy...970',
        status: 'Success',
        quantity: -1.42,
        amount_in_usd: 62000.0,
        assets: 'BTC'
      },
      {
        date: 'February 27, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qkn0...s4h',
        status: 'Success',
        quantity: -1.84,
        amount_in_usd: 79800.0,
        assets: 'BTC'
      },
      {
        date: 'February 16, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BvBMS...VN2',
        status: 'Success',
        quantity: 0.71,
        amount_in_usd: 30700.0,
        assets: 'BTC'
      },
      {
        date: 'February 05, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qh9m...3dw',
        status: 'Success',
        quantity: -1.21,
        amount_in_usd: 52200.0,
        assets: 'BTC'
      },
      {
        date: 'January 29, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1qxy2...wlh',
        status: 'Success',
        quantity: -2.17,
        amount_in_usd: 93000.0,
        assets: 'BTC'
      },
      {
        date: 'January 18, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qd4y...efd',
        status: 'Success',
        quantity: 0.82,
        amount_in_usd: 35000.0,
        assets: 'BTC'
      },
      {
        date: 'January 07, 2024',
        description: 'Transfer BTC',
        walletAddress: 'bc1q9x3...4ew',
        status: 'Success',
        quantity: -1.09,
        amount_in_usd: 46300.0,
        assets: 'BTC'
      },
      {
        date: 'December 28, 2023',
        description: 'Transfer BTC',
        walletAddress: 'bc1q0sg...ldf',
        status: 'Success',
        quantity: -1.73,
        amount_in_usd: 72800.0,
        assets: 'BTC'
      },
      {
        date: 'December 17, 2023',
        description: 'Deposit BTC',
        walletAddress: '3Nxwen...p8v',
        status: 'Success',
        quantity: 0.68,
        amount_in_usd: 28500.0,
        assets: 'BTC'
      },
      {
        date: 'December 06, 2023',
        description: 'Transfer BTC',
        walletAddress: 'bc1q0d9...sq0',
        status: 'Success',
        quantity: -1.25,
        amount_in_usd: 52300.0,
        assets: 'BTC'
      },
      {
        date: 'November 29, 2023',
        description: 'Transfer BTC',
        walletAddress: 'bc1qc5z...vh4',
        status: 'Success',
        quantity: -1.97,
        amount_in_usd: 81900.0,
        assets: 'BTC'
      },
      {
        date: 'November 18, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1qetu...kzm',
        status: 'Success',
        quantity: 0.89,
        amount_in_usd: 36900.0,
        assets: 'BTC'
      },
      {
        date: 'November 07, 2023',
        description: 'Transfer BTC',
        walletAddress: 'bc1qus3...jyk',
        status: 'Success',
        quantity: -1.33,
        amount_in_usd: 55000.0,
        assets: 'BTC'
      },
      {
        date: 'October 29, 2023',
        description: 'Transfer BTC',
        walletAddress: 'bc1qfj8...xqt',
        status: 'Success',
        quantity: -2.28,
        amount_in_usd: 93800.0,
        assets: 'BTC'
      },
      {
        date: 'October 18, 2023',
        description: 'Deposit BTC',
        walletAddress: '1NDyJt...u1s',
        status: 'Success',
        quantity: 0.75,
        amount_in_usd: 30700.0,
        assets: 'BTC'
      },
      {
        date: 'October 07, 2023',
        description: 'Transfer BTC',
        walletAddress: 'bc1q7vw...h08',
        status: 'Success',
        quantity: -1.31,
        amount_in_usd: 53600.0,
        assets: 'BTC'
      },
      {
        date: 'September 28, 2023',
        description: 'Transfer BTC',
        walletAddress: 'bc1qglk...4g3',
        status: 'Success',
        quantity: -1.62,
        amount_in_usd: 65800.0,
        assets: 'BTC'
      },
      {
        date: 'September 17, 2023',
        description: 'Deposit BTC',
        walletAddress: 'bc1q4rd...7hj',
        status: 'Success',
        quantity: 0.93,
        amount_in_usd: 37600.0,
        assets: 'BTC'
      },
      {
        date: 'September 06, 2023',
        description: 'Transfer BTC',
        walletAddress: 'bc1q5dz...h4m',
        status: 'Success',
        quantity: -1.15,
        amount_in_usd: 46500.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: 'bc1qhl7znnt6uj4kcez96az2lt9x3w8lax46hvfv2j',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 79
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x4dEea33c8A880b1841B4b7A94ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x4dEea33c8A880b1841B4b7A94ce13ffefA5c052e',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/EKHVvWB.png',
        quantity: 0
      }
    ]
  }
];
