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
        transaction_id: 'TXN001',
        date: 'August 1, 2024',
        description: 'Bonus Deposit',
        walletAddress: '1A1zP1eP...z8AEuR',
        status: 'Success',
        quantity: 0.0031,
        amount_in_usd: 300.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN002',
        date: 'August 1, 2024',
        description: 'Deposit BTC',
        walletAddress: '3J98t1Wp...X5hA5B',
        status: 'Success',
        quantity: 0.015,
        amount_in_usd: 1500.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN003',
        date: 'June 24, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qw508d...za67d7',
        status: 'Success',
        quantity: 0.00062,
        amount_in_usd: 60.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN004',
        date: 'June 18, 2024',
        description: 'Deposit BTC',
        walletAddress: '1BoatSLR...21aF5W',
        status: 'Success',
        quantity: 0.00026,
        amount_in_usd: 25.0,
        assets: 'BTC'
      },
      {
        transaction_id: 'TXN005',
        date: 'June 3, 2024',
        description: 'Deposit BTC',
        walletAddress: 'bc1qar0s8...53kw5n',
        status: 'Success',
        quantity: 0.0083,
        amount_in_usd: 800.0,
        assets: 'BTC'
      }
    ],
    assets: [
      {
        assetsName: 'BTC',
        assetsName2: 'Bitcoin',
        walletAddress: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/N6UMWP2.png',
        quantity: 0.042
      },
      {
        assetsName: 'ETH',
        assetsName2: 'Ethereum',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
        barCodeImgUrl: 'https://i.imgur.com/ZOqOQmH.png',
        assetsLogo: 'https://i.imgur.com/feMQhL4.png',
        quantity: 0
      },
      {
        assetsName: 'BNB',
        assetsName2: 'Binance Coin',
        walletAddress: '0x1D1479C185d32EB90533a08b36B3CFa5F84A0E6B',
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
      email: 's@gmail.com',
      username: 's',
      password: 's'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you.',
      transaction_return_msg: 'You are unable to withdraw at the moment. Clear your tax and your investment will be available for withdrawal.',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
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
        quantity: 3.41
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
