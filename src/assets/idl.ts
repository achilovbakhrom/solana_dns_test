export type Solname = {
  version: "0.1.0";
  name: "solname";
  instructions: [
    {
      name: "initDns";
      accounts: [
        {
          name: "dnsState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "topDomains";
          type: {
            vec: "string";
          };
        }
      ];
    },
    {
      name: "registerDomain";
      accounts: [
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "domain";
          isMut: true;
          isSigner: false;
        },
        {
          name: "chainlinkProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "chainlinkFeed";
          isMut: false;
          isSigner: false;
        },
        {
          name: "receiver";
          isMut: true;
          isSigner: false;
        },
        {
          name: "receiverAta";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "payerAta";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "mintAuthority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "metadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMetadataProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "masterEdition";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "periodYear";
          type: "u8";
        },
        {
          name: "creatorKey";
          type: "publicKey";
        },
        {
          name: "uri";
          type: "string";
        },
        {
          name: "title";
          type: "string";
        },
        {
          name: "paymentToken";
          type: "string";
        }
      ];
    },
    {
      name: "unregisterDomain";
      accounts: [
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "domain";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        }
      ];
    },
    {
      name: "expandDomain";
      accounts: [
        {
          name: "state";
          isMut: false;
          isSigner: false;
        },
        {
          name: "domain";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "chainlinkProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "chainlinkFeed";
          isMut: false;
          isSigner: false;
        },
        {
          name: "receiver";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "period";
          type: "u8";
        },
        {
          name: "unit";
          type: {
            defined: "PeriodType";
          };
        }
      ];
    },
    {
      name: "updateProfile";
      accounts: [
        {
          name: "domain";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "profile";
          type: {
            defined: "Profile";
          };
        },
        {
          name: "socials";
          type: {
            defined: "SocialMedia";
          };
        },
        {
          name: "wallets";
          type: {
            defined: "Wallets";
          };
        },
        {
          name: "textRecords";
          type: {
            vec: {
              defined: "TextRecord";
            };
          };
        }
      ];
    },
    {
      name: "registerSubdomain";
      accounts: [
        {
          name: "state";
          isMut: false;
          isSigner: false;
        },
        {
          name: "domain";
          isMut: true;
          isSigner: false;
        },
        {
          name: "chainlinkProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "chainlinkFeed";
          isMut: false;
          isSigner: false;
        },
        {
          name: "receiver";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "subDomain";
          type: "string";
        }
      ];
    },
    {
      name: "unregisterSubdomain";
      accounts: [
        {
          name: "state";
          isMut: false;
          isSigner: false;
        },
        {
          name: "domain";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "subDomain";
          type: "string";
        }
      ];
    },
    {
      name: "setPrimaryDomain";
      accounts: [
        {
          name: "domain";
          isMut: false;
          isSigner: false;
        },
        {
          name: "primaryDomain";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        }
      ];
    },
    {
      name: "transferDomain";
      accounts: [
        {
          name: "domain";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mintSent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "senderWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "receiverWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "receiver";
          type: "publicKey";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "adminConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "priceFeed";
            type: "publicKey";
          },
          {
            name: "chainlinkProgram";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "domain";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "expiresAt";
            type: "i64";
          },
          {
            name: "profile";
            type: {
              defined: "Profile";
            };
          },
          {
            name: "socials";
            type: {
              defined: "SocialMedia";
            };
          },
          {
            name: "wallets";
            type: {
              defined: "Wallets";
            };
          },
          {
            name: "textRecords";
            type: {
              vec: {
                defined: "TextRecord";
              };
            };
          },
          {
            name: "subdomains";
            type: {
              vec: {
                defined: "SubDomain";
              };
            };
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "nftToken";
            type: "publicKey";
          },
          {
            name: "metadata";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "dnsState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "admin";
            type: "publicKey";
          },
          {
            name: "primaryDomains";
            type: {
              vec: "publicKey";
            };
          },
          {
            name: "allowedTopDomains";
            type: {
              vec: "string";
            };
          }
        ];
      };
    },
    {
      name: "primaryDomain";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          }
        ];
      };
    },
    {
      name: "decimal";
      type: {
        kind: "struct";
        fields: [
          {
            name: "value";
            type: "i128";
          },
          {
            name: "decimals";
            type: "u32";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "Profile";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "avatar";
            type: "string";
          },
          {
            name: "location";
            type: "string";
          },
          {
            name: "website";
            type: "string";
          },
          {
            name: "shortbio";
            type: "string";
          }
        ];
      };
    },
    {
      name: "SocialMedia";
      type: {
        kind: "struct";
        fields: [
          {
            name: "telegram";
            type: "string";
          },
          {
            name: "discord";
            type: "string";
          },
          {
            name: "twitter";
            type: "string";
          },
          {
            name: "medium";
            type: "string";
          },
          {
            name: "facebook";
            type: "string";
          },
          {
            name: "otherLink";
            type: "string";
          }
        ];
      };
    },
    {
      name: "Wallets";
      type: {
        kind: "struct";
        fields: [
          {
            name: "btc";
            type: "string";
          },
          {
            name: "eth";
            type: "string";
          },
          {
            name: "sol";
            type: "string";
          }
        ];
      };
    },
    {
      name: "TextRecord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "nameValue";
            type: "string";
          },
          {
            name: "link";
            type: "string";
          }
        ];
      };
    },
    {
      name: "SubDomain";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          }
        ];
      };
    },
    {
      name: "PeriodType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Year";
          },
          {
            name: "Month";
          },
          {
            name: "Day";
          },
          {
            name: "Hour";
          },
          {
            name: "Minute";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "InvalidOwner";
      msg: "Invalid Owner";
    },
    {
      code: 6001;
      name: "NotInitialized";
      msg: "Not initialized";
    },
    {
      code: 6002;
      name: "InvalidName";
      msg: "Invalid Domain name";
    },
    {
      code: 6003;
      name: "Unauthorized";
      msg: "You are not authorized to perform this action.";
    },
    {
      code: 6004;
      name: "ReInitialize";
      msg: "The config has already been initialized.";
    },
    {
      code: 6005;
      name: "UnInitialize";
      msg: "The config has not been initialized.";
    },
    {
      code: 6006;
      name: "InvalidArgument";
      msg: "Argument is invalid.";
    },
    {
      code: 6007;
      name: "Overflow";
      msg: "An overflow occurs.";
    },
    {
      code: 6008;
      name: "PythError";
      msg: "Pyth has an internal error.";
    },
    {
      code: 6009;
      name: "PythOffline";
      msg: "Pyth price oracle is offline.";
    },
    {
      code: 6010;
      name: "LoanValueTooHigh";
      msg: "The loan value is higher than the collateral value.";
    },
    {
      code: 6011;
      name: "TryToSerializePriceAccount";
      msg: "Program should not try to serialize a price account.";
    },
    {
      code: 6012;
      name: "DomainNotFound";
      msg: "Domain Not Found.";
    },
    {
      code: 6013;
      name: "DomainDateExceedsLimit";
      msg: "Can't register more than 10 subdomains.";
    },
    {
      code: 6014;
      name: "InvalidSubdomainCount";
      msg: "Only up to 5 years can be registered.";
    },
    {
      code: 6015;
      name: "SubdomainExists";
      msg: "The sub-domain has already been registered.";
    }
  ];
};

export const IDL: Solname = {
  version: "0.1.0",
  name: "solname",
  instructions: [
    {
      name: "initDns",
      accounts: [
        {
          name: "dnsState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "topDomains",
          type: {
            vec: "string",
          },
        },
      ],
    },
    {
      name: "registerDomain",
      accounts: [
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "domain",
          isMut: true,
          isSigner: false,
        },
        {
          name: "chainlinkProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "chainlinkFeed",
          isMut: false,
          isSigner: false,
        },
        {
          name: "receiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "receiverAta",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "payerAta",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "mintAuthority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "metadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMetadataProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "masterEdition",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "periodYear",
          type: "u8",
        },
        {
          name: "creatorKey",
          type: "publicKey",
        },
        {
          name: "uri",
          type: "string",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "paymentToken",
          type: "string",
        },
      ],
    },
    {
      name: "unregisterDomain",
      accounts: [
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "domain",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
      ],
    },
    {
      name: "expandDomain",
      accounts: [
        {
          name: "state",
          isMut: false,
          isSigner: false,
        },
        {
          name: "domain",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "chainlinkProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "chainlinkFeed",
          isMut: false,
          isSigner: false,
        },
        {
          name: "receiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "period",
          type: "u8",
        },
        {
          name: "unit",
          type: {
            defined: "PeriodType",
          },
        },
      ],
    },
    {
      name: "updateProfile",
      accounts: [
        {
          name: "domain",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "profile",
          type: {
            defined: "Profile",
          },
        },
        {
          name: "socials",
          type: {
            defined: "SocialMedia",
          },
        },
        {
          name: "wallets",
          type: {
            defined: "Wallets",
          },
        },
        {
          name: "textRecords",
          type: {
            vec: {
              defined: "TextRecord",
            },
          },
        },
      ],
    },
    {
      name: "registerSubdomain",
      accounts: [
        {
          name: "state",
          isMut: false,
          isSigner: false,
        },
        {
          name: "domain",
          isMut: true,
          isSigner: false,
        },
        {
          name: "chainlinkProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "chainlinkFeed",
          isMut: false,
          isSigner: false,
        },
        {
          name: "receiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "subDomain",
          type: "string",
        },
      ],
    },
    {
      name: "unregisterSubdomain",
      accounts: [
        {
          name: "state",
          isMut: false,
          isSigner: false,
        },
        {
          name: "domain",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "subDomain",
          type: "string",
        },
      ],
    },
    {
      name: "setPrimaryDomain",
      accounts: [
        {
          name: "domain",
          isMut: false,
          isSigner: false,
        },
        {
          name: "primaryDomain",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
      ],
    },
    {
      name: "transferDomain",
      accounts: [
        {
          name: "domain",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mintSent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "senderWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "receiverWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "receiver",
          type: "publicKey",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "adminConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "priceFeed",
            type: "publicKey",
          },
          {
            name: "chainlinkProgram",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "domain",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "expiresAt",
            type: "i64",
          },
          {
            name: "profile",
            type: {
              defined: "Profile",
            },
          },
          {
            name: "socials",
            type: {
              defined: "SocialMedia",
            },
          },
          {
            name: "wallets",
            type: {
              defined: "Wallets",
            },
          },
          {
            name: "textRecords",
            type: {
              vec: {
                defined: "TextRecord",
              },
            },
          },
          {
            name: "subdomains",
            type: {
              vec: {
                defined: "SubDomain",
              },
            },
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "nftToken",
            type: "publicKey",
          },
          {
            name: "metadata",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "dnsState",
      type: {
        kind: "struct",
        fields: [
          {
            name: "admin",
            type: "publicKey",
          },
          {
            name: "primaryDomains",
            type: {
              vec: "publicKey",
            },
          },
          {
            name: "allowedTopDomains",
            type: {
              vec: "string",
            },
          },
        ],
      },
    },
    {
      name: "primaryDomain",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
        ],
      },
    },
    {
      name: "decimal",
      type: {
        kind: "struct",
        fields: [
          {
            name: "value",
            type: "i128",
          },
          {
            name: "decimals",
            type: "u32",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "Profile",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "avatar",
            type: "string",
          },
          {
            name: "location",
            type: "string",
          },
          {
            name: "website",
            type: "string",
          },
          {
            name: "shortbio",
            type: "string",
          },
        ],
      },
    },
    {
      name: "SocialMedia",
      type: {
        kind: "struct",
        fields: [
          {
            name: "telegram",
            type: "string",
          },
          {
            name: "discord",
            type: "string",
          },
          {
            name: "twitter",
            type: "string",
          },
          {
            name: "medium",
            type: "string",
          },
          {
            name: "facebook",
            type: "string",
          },
          {
            name: "otherLink",
            type: "string",
          },
        ],
      },
    },
    {
      name: "Wallets",
      type: {
        kind: "struct",
        fields: [
          {
            name: "btc",
            type: "string",
          },
          {
            name: "eth",
            type: "string",
          },
          {
            name: "sol",
            type: "string",
          },
        ],
      },
    },
    {
      name: "TextRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "nameValue",
            type: "string",
          },
          {
            name: "link",
            type: "string",
          },
        ],
      },
    },
    {
      name: "SubDomain",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
        ],
      },
    },
    {
      name: "PeriodType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Year",
          },
          {
            name: "Month",
          },
          {
            name: "Day",
          },
          {
            name: "Hour",
          },
          {
            name: "Minute",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidOwner",
      msg: "Invalid Owner",
    },
    {
      code: 6001,
      name: "NotInitialized",
      msg: "Not initialized",
    },
    {
      code: 6002,
      name: "InvalidName",
      msg: "Invalid Domain name",
    },
    {
      code: 6003,
      name: "Unauthorized",
      msg: "You are not authorized to perform this action.",
    },
    {
      code: 6004,
      name: "ReInitialize",
      msg: "The config has already been initialized.",
    },
    {
      code: 6005,
      name: "UnInitialize",
      msg: "The config has not been initialized.",
    },
    {
      code: 6006,
      name: "InvalidArgument",
      msg: "Argument is invalid.",
    },
    {
      code: 6007,
      name: "Overflow",
      msg: "An overflow occurs.",
    },
    {
      code: 6008,
      name: "PythError",
      msg: "Pyth has an internal error.",
    },
    {
      code: 6009,
      name: "PythOffline",
      msg: "Pyth price oracle is offline.",
    },
    {
      code: 6010,
      name: "LoanValueTooHigh",
      msg: "The loan value is higher than the collateral value.",
    },
    {
      code: 6011,
      name: "TryToSerializePriceAccount",
      msg: "Program should not try to serialize a price account.",
    },
    {
      code: 6012,
      name: "DomainNotFound",
      msg: "Domain Not Found.",
    },
    {
      code: 6013,
      name: "DomainDateExceedsLimit",
      msg: "Can't register more than 10 subdomains.",
    },
    {
      code: 6014,
      name: "InvalidSubdomainCount",
      msg: "Only up to 5 years can be registered.",
    },
    {
      code: 6015,
      name: "SubdomainExists",
      msg: "The sub-domain has already been registered.",
    },
  ],
};
