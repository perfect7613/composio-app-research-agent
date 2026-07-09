window.RESEARCH_CASE_STUDY = {
  "research": [
    {
      "id": 1,
      "name": "Salesforce",
      "category": "CRM and Sales",
      "hint": "salesforce.com",
      "summary": "Enterprise CRM platform for sales, service, automation, and customer data.",
      "authMethods": [
        "OAuth2",
        "JWT bearer",
        "session token"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "Broad REST, SOAP, Bulk, Metadata, Streaming, and GraphQL surfaces.",
      "mcpStatus": "No official Salesforce MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Connected app setup and admin permissions.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm",
        "https://help.salesforce.com/s/articleView?id=sf.connected_app_create.htm"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 2,
      "name": "HubSpot",
      "category": "CRM and Sales",
      "hint": "hubspot.com",
      "summary": "CRM and marketing automation platform.",
      "authMethods": [
        "OAuth2",
        "private app token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad public CRM, marketing, files, events, and automation REST APIs.",
      "mcpStatus": "No official HubSpot MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "OAuth scopes and account object variation.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.hubspot.com/docs/api/overview",
        "https://developers.hubspot.com/docs/apps/authentication/oauth-quickstart-guide"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 3,
      "name": "Pipedrive",
      "category": "CRM and Sales",
      "hint": "pipedrive.com",
      "summary": "Sales CRM focused on pipeline and deal workflows.",
      "authMethods": [
        "OAuth2",
        "API token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST API for deals, persons, orgs, activities, files, and webhooks.",
      "mcpStatus": "No official Pipedrive MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Per-account API token handling and rate limits.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.pipedrive.com/docs/api/v1",
        "https://pipedrive.readme.io/docs/core-api-concepts-authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 4,
      "name": "Attio",
      "category": "CRM and Sales",
      "hint": "attio.com",
      "summary": "Modern CRM and workspace for customer data.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public REST API for objects, records, lists, comments, notes, tasks, and webhooks.",
      "mcpStatus": "No official Attio MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Object model mapping and scope design.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.attio.com/rest-api/endpoint-reference/overview",
        "https://docs.attio.com/docs/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 5,
      "name": "Twenty",
      "category": "CRM and Sales",
      "hint": "twenty.com",
      "summary": "Open-source CRM with extensible workspace objects.",
      "authMethods": [
        "API key",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Open-source API surface with REST and GraphQL-oriented platform docs.",
      "mcpStatus": "No official Twenty MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Version drift between cloud and self-hosted deployments.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://twenty.com/developers",
        "https://github.com/twentyhq/twenty"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 6,
      "name": "Podio",
      "category": "CRM and Sales",
      "hint": "podio.com",
      "summary": "Work management and CRM-style app platform.",
      "authMethods": [
        "OAuth2",
        "app auth"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public REST API for apps, items, tasks, files, hooks, and orgs.",
      "mcpStatus": "No official Podio MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "OAuth/app auth modes need careful tenant setup.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.podio.com/",
        "https://developers.podio.com/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 7,
      "name": "Zoho CRM",
      "category": "CRM and Sales",
      "hint": "zoho.com/crm",
      "summary": "CRM suite for sales, support, and customer lifecycle workflows.",
      "authMethods": [
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST APIs for modules, records, users, layouts, bulk, and notifications.",
      "mcpStatus": "No official Zoho CRM MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Region-specific accounts and OAuth scopes.",
      "confidence": "high",
      "evidenceUrls": [
        "https://www.zoho.com/crm/developer/docs/api/v7/",
        "https://www.zoho.com/crm/developer/docs/api/v7/oauth-overview.html"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 8,
      "name": "Close",
      "category": "CRM and Sales",
      "hint": "close.com",
      "summary": "Sales CRM for calling, emailing, and pipeline management.",
      "authMethods": [
        "API key",
        "Basic"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public REST API for leads, contacts, opportunities, activities, calls, and webhooks.",
      "mcpStatus": "No official Close MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "API key security and object mapping.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.close.com/",
        "https://developer.close.com/topics/authentication/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 9,
      "name": "Copper",
      "category": "CRM and Sales",
      "hint": "copper.com",
      "summary": "Google Workspace-native CRM for relationship management.",
      "authMethods": [
        "API key",
        "user email"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "REST API for people, companies, opportunities, projects, tasks, and webhooks.",
      "mcpStatus": "No official Copper MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Requires Copper account and API key from user/admin.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://developer.copper.com/",
        "https://developer.copper.com/introduction/authentication.html"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 10,
      "name": "DealCloud",
      "category": "CRM and Sales",
      "hint": "api.docs.dealcloud.com",
      "summary": "Deal management CRM for investment and financial services teams.",
      "authMethods": [
        "OAuth2",
        "token"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "Documented REST API for DealCloud customers.",
      "mcpStatus": "No official DealCloud MCP found in baseline.",
      "buildability": "outreach-needed",
      "mainBlocker": "Customer/admin access and domain-specific schema.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://api.docs.dealcloud.com/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 11,
      "name": "Zendesk",
      "category": "Support and Helpdesk",
      "hint": "zendesk.com",
      "summary": "Customer service platform for tickets, help center, and messaging.",
      "authMethods": [
        "OAuth2",
        "API token",
        "Basic"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "Broad REST APIs for support, help center, chat, users, and webhooks.",
      "mcpStatus": "No official Zendesk MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Admin token setup and product-specific APIs.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.zendesk.com/api-reference/",
        "https://developer.zendesk.com/documentation/api-basics/authentication/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 12,
      "name": "Intercom",
      "category": "Support and Helpdesk",
      "hint": "intercom.com",
      "summary": "Customer messaging, support, and engagement platform.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public REST API for contacts, conversations, companies, tickets, articles, and webhooks.",
      "mcpStatus": "No official Intercom MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "OAuth scope review and data model breadth.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.intercom.com/docs/references/rest-api",
        "https://developers.intercom.com/docs/build-an-integration/learn-more/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 13,
      "name": "Freshdesk",
      "category": "Support and Helpdesk",
      "hint": "freshdesk.com",
      "summary": "Helpdesk and customer support ticketing product.",
      "authMethods": [
        "API key",
        "Basic",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for tickets, contacts, companies, agents, solutions, and automations.",
      "mcpStatus": "No official Freshdesk MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Plan limits and product family split.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.freshdesk.com/api/",
        "https://developers.freshdesk.com/api/#authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 14,
      "name": "Front",
      "category": "Support and Helpdesk",
      "hint": "front.com",
      "summary": "Shared inbox and customer operations platform.",
      "authMethods": [
        "OAuth2",
        "API token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public API for conversations, contacts, channels, messages, rules, and webhooks.",
      "mcpStatus": "No official Front MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Workspace authorization and message permissions.",
      "confidence": "high",
      "evidenceUrls": [
        "https://dev.frontapp.com/reference/introduction",
        "https://dev.frontapp.com/docs/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 15,
      "name": "Pylon",
      "category": "Support and Helpdesk",
      "hint": "usepylon.com",
      "summary": "B2B customer support platform for Slack, Teams, email, and ticketing.",
      "authMethods": [
        "API key",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public API documentation for accounts, issues, messages, and webhooks.",
      "mcpStatus": "No official Pylon MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Younger API surface and account access requirements.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://docs.usepylon.com/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 16,
      "name": "LiveAgent",
      "category": "Support and Helpdesk",
      "hint": "liveagent.com",
      "summary": "Helpdesk software for tickets, chat, call center, and knowledge base.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for tickets, contacts, companies, agents, and calls.",
      "mcpStatus": "No official LiveAgent MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "API key setup and product-specific endpoints.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://support.liveagent.com/963150-API-v3",
        "https://support.liveagent.com/062702-API"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 17,
      "name": "Plain",
      "category": "Support and Helpdesk",
      "hint": "plain.com",
      "summary": "Modern support platform for B2B teams.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "GraphQL API for customers, threads, events, labels, and support operations.",
      "mcpStatus": "No official Plain MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "GraphQL schema mapping and key handling.",
      "confidence": "high",
      "evidenceUrls": [
        "https://www.plain.com/docs/api-reference/introduction",
        "https://www.plain.com/docs/api-reference/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 18,
      "name": "Help Scout",
      "category": "Support and Helpdesk",
      "hint": "helpscout.com",
      "summary": "Customer support inbox, docs, and messaging platform.",
      "authMethods": [
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Mailbox, Docs, Beacon, users, conversations, and webhooks APIs.",
      "mcpStatus": "No official Help Scout MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "OAuth app setup and mailbox permissions.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.helpscout.com/",
        "https://developer.helpscout.com/mailbox-api/overview/authentication/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 19,
      "name": "Gorgias",
      "category": "Support and Helpdesk",
      "hint": "gorgias.com",
      "summary": "Ecommerce helpdesk for merchants.",
      "authMethods": [
        "Basic",
        "API key",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST APIs for tickets, customers, integrations, macros, and ecommerce support data.",
      "mcpStatus": "No official Gorgias MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Merchant auth and ecommerce object permissions.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://developers.gorgias.com/reference/introduction",
        "https://developers.gorgias.com/reference/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 20,
      "name": "Gladly",
      "category": "Support and Helpdesk",
      "hint": "gladly.com",
      "summary": "Customer service platform with conversation-centered support.",
      "authMethods": [
        "API token",
        "Basic"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "Documented customer API for conversations, customers, tasks, and events.",
      "mcpStatus": "No official Gladly MCP found in baseline.",
      "buildability": "outreach-needed",
      "mainBlocker": "Customer/admin account required; public signup path is unclear.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://developer.gladly.com/rest/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 21,
      "name": "Slack",
      "category": "Communications and Messaging",
      "hint": "slack.com",
      "summary": "Team messaging and collaboration platform.",
      "authMethods": [
        "OAuth2",
        "bot token",
        "user token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Very broad Web API, Events API, Socket Mode, workflows, and app surfaces.",
      "mcpStatus": "Official and community Slack MCP servers exist.",
      "buildability": "easy-win",
      "mainBlocker": "OAuth review, workspace install, and granular scopes.",
      "confidence": "high",
      "evidenceUrls": [
        "https://api.slack.com/apis",
        "https://api.slack.com/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 22,
      "name": "Twilio",
      "category": "Communications and Messaging",
      "hint": "twilio.com",
      "summary": "Communications APIs for SMS, voice, email, verification, and messaging.",
      "authMethods": [
        "Account SID/Auth Token",
        "API key",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST APIs across messaging, voice, Verify, Conversations, SendGrid, and more.",
      "mcpStatus": "No official Twilio MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Product-specific compliance and phone-number requirements.",
      "confidence": "high",
      "evidenceUrls": [
        "https://www.twilio.com/docs/usage/api",
        "https://www.twilio.com/docs/iam/api-keys"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 23,
      "name": "Zoho Cliq",
      "category": "Communications and Messaging",
      "hint": "zoho.com/cliq",
      "summary": "Team chat and collaboration platform from Zoho.",
      "authMethods": [
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST APIs for channels, messages, bots, users, commands, and webhooks.",
      "mcpStatus": "No official Zoho Cliq MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Zoho region and OAuth scope setup.",
      "confidence": "high",
      "evidenceUrls": [
        "https://www.zoho.com/cliq/help/restapi/v2/",
        "https://www.zoho.com/cliq/help/restapi/v2/#authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 24,
      "name": "Lark (Larksuite)",
      "category": "Communications and Messaging",
      "hint": "open.larksuite.com",
      "summary": "Collaboration suite with messaging, docs, calendar, and approvals.",
      "authMethods": [
        "OAuth2",
        "app access token",
        "tenant access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad Open Platform APIs for messages, docs, contacts, calendar, approvals, and bots.",
      "mcpStatus": "No official Lark MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Tenant app approval and region-specific platform behavior.",
      "confidence": "high",
      "evidenceUrls": [
        "https://open.larksuite.com/document/home/index",
        "https://open.larksuite.com/document/server-docs/authentication-management/access-token/tenant_access_token_internal"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 25,
      "name": "Pumble",
      "category": "Communications and Messaging",
      "hint": "pumble.com",
      "summary": "Team chat and collaboration app.",
      "authMethods": [
        "API token"
      ],
      "credentialAccess": "unclear",
      "apiSurface": "Public API documentation appears limited compared with Slack-style platforms.",
      "mcpStatus": "No official Pumble MCP found in baseline.",
      "buildability": "needs-review",
      "mainBlocker": "API breadth and credential access need confirmation.",
      "confidence": "low",
      "evidenceUrls": [
        "https://pumble.com/help/integrations/api/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 26,
      "name": "Discord",
      "category": "Communications and Messaging",
      "hint": "discord.com",
      "summary": "Community chat, voice, and app platform.",
      "authMethods": [
        "OAuth2",
        "bot token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST, Gateway, interactions, slash command, and webhook APIs.",
      "mcpStatus": "No official Discord MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Bot install and privileged intents for some data.",
      "confidence": "high",
      "evidenceUrls": [
        "https://discord.com/developers/docs/intro",
        "https://discord.com/developers/docs/topics/oauth2"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 27,
      "name": "Telegram",
      "category": "Communications and Messaging",
      "hint": "core.telegram.org",
      "summary": "Messaging platform with bot and client APIs.",
      "authMethods": [
        "bot token",
        "MTProto auth"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Bot API and Telegram API for messaging, updates, files, payments, and chats.",
      "mcpStatus": "No official Telegram MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Bot limitations versus full user-client API.",
      "confidence": "high",
      "evidenceUrls": [
        "https://core.telegram.org/bots/api",
        "https://core.telegram.org/api/auth"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 28,
      "name": "WhatsApp Business",
      "category": "Communications and Messaging",
      "hint": "developers.facebook.com/docs/whatsapp",
      "summary": "Business messaging API within Meta's platform.",
      "authMethods": [
        "OAuth2",
        "system user token",
        "business token"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "Cloud API for messages, templates, media, phone numbers, webhooks, and business assets.",
      "mcpStatus": "No official WhatsApp MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Meta business verification, app review, and phone number setup.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.facebook.com/docs/whatsapp/cloud-api",
        "https://developers.facebook.com/docs/whatsapp/embedded-signup/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 29,
      "name": "Aircall",
      "category": "Communications and Messaging",
      "hint": "aircall.io",
      "summary": "Cloud phone and call center platform.",
      "authMethods": [
        "OAuth2",
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public REST API for calls, contacts, users, teams, webhooks, and numbers.",
      "mcpStatus": "No official Aircall MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "OAuth app setup and telephony permissions.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.aircall.io/api-references/",
        "https://developer.aircall.io/api-references/#authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 30,
      "name": "Vonage",
      "category": "Communications and Messaging",
      "hint": "developer.vonage.com",
      "summary": "Communications APIs for SMS, voice, video, verify, and messaging.",
      "authMethods": [
        "API key/secret",
        "JWT",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST APIs for communications, applications, numbers, verification, and messages.",
      "mcpStatus": "No official Vonage MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Product-specific auth variants and compliance.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.vonage.com/en/api",
        "https://developer.vonage.com/en/getting-started/concepts/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 31,
      "name": "Google Ads",
      "category": "Marketing, Ads, Email and Social",
      "hint": "developers.google.com/google-ads",
      "summary": "Advertising platform for search, display, video, and app campaigns.",
      "authMethods": [
        "OAuth2",
        "developer token"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "Large gRPC/REST API for accounts, campaigns, ads, assets, reports, and conversions.",
      "mcpStatus": "No official Google Ads MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Developer token approval and OAuth consent.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.google.com/google-ads/api/docs/start",
        "https://developers.google.com/google-ads/api/docs/oauth/overview"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 32,
      "name": "Meta Ads",
      "category": "Marketing, Ads, Email and Social",
      "hint": "developers.facebook.com/docs/marketing-apis",
      "summary": "Meta marketing APIs for ads, audiences, insights, and business assets.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "Broad Marketing API for campaigns, ad sets, ads, creatives, audiences, and insights.",
      "mcpStatus": "No official Meta Ads MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Business verification, app review, and permissions.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.facebook.com/docs/marketing-apis",
        "https://developers.facebook.com/docs/facebook-login/guides/access-tokens"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 33,
      "name": "LinkedIn Ads",
      "category": "Marketing, Ads, Email and Social",
      "hint": "learn.microsoft.com/linkedin/marketing",
      "summary": "Advertising APIs for LinkedIn campaigns and reporting.",
      "authMethods": [
        "OAuth2"
      ],
      "credentialAccess": "partner-gated",
      "apiSurface": "Marketing APIs for ad accounts, campaigns, creatives, audiences, and analytics.",
      "mcpStatus": "No official LinkedIn Ads MCP found in baseline.",
      "buildability": "outreach-needed",
      "mainBlocker": "LinkedIn Marketing API access is gated by product/app approval.",
      "confidence": "high",
      "evidenceUrls": [
        "https://learn.microsoft.com/en-us/linkedin/marketing/",
        "https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 34,
      "name": "GoHighLevel",
      "category": "Marketing, Ads, Email and Social",
      "hint": "highlevel.stoplight.io",
      "summary": "Marketing and CRM platform for agencies.",
      "authMethods": [
        "OAuth2",
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public REST APIs for contacts, opportunities, calendars, conversations, locations, and workflows.",
      "mcpStatus": "No official GoHighLevel MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Agency/location auth model and versioned APIs.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://highlevel.stoplight.io/docs/integrations/",
        "https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzQ4Njg1-o-auth-2-0"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 35,
      "name": "Mailchimp",
      "category": "Marketing, Ads, Email and Social",
      "hint": "mailchimp.com/developer",
      "summary": "Email marketing and audience automation platform.",
      "authMethods": [
        "OAuth2",
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for audiences, campaigns, automations, reports, stores, and webhooks.",
      "mcpStatus": "No official Mailchimp MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Datacenter-specific API roots and account scopes.",
      "confidence": "high",
      "evidenceUrls": [
        "https://mailchimp.com/developer/marketing/api/",
        "https://mailchimp.com/developer/marketing/docs/fundamentals/#authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 36,
      "name": "Klaviyo",
      "category": "Marketing, Ads, Email and Social",
      "hint": "developers.klaviyo.com",
      "summary": "Marketing automation platform for email, SMS, and customer data.",
      "authMethods": [
        "API key",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for profiles, events, lists, campaigns, flows, metrics, and webhooks.",
      "mcpStatus": "No official Klaviyo MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "API revision headers and scope mapping.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.klaviyo.com/en/reference/api_overview",
        "https://developers.klaviyo.com/en/docs/authenticate_"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 37,
      "name": "systeme.io",
      "category": "Marketing, Ads, Email and Social",
      "hint": "systeme.io",
      "summary": "Online business platform for funnels, email, courses, and sales.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "unclear",
      "apiSurface": "Public API documentation is limited and less mature than major marketing platforms.",
      "mcpStatus": "No official systeme.io MCP found in baseline.",
      "buildability": "needs-review",
      "mainBlocker": "Credential access and API breadth need confirmation.",
      "confidence": "low",
      "evidenceUrls": [
        "https://developer.systeme.io/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 38,
      "name": "Pinterest",
      "category": "Marketing, Ads, Email and Social",
      "hint": "developers.pinterest.com",
      "summary": "Visual discovery and advertising platform.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for pins, boards, ads, catalogs, audiences, and analytics.",
      "mcpStatus": "No official Pinterest MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "App review and ads permission gating.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.pinterest.com/docs/api/v5/",
        "https://developers.pinterest.com/docs/getting-started/authentication/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 39,
      "name": "Threads (Meta)",
      "category": "Marketing, Ads, Email and Social",
      "hint": "developers.facebook.com/docs/threads",
      "summary": "Meta social platform with publishing and insights APIs.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "Threads API supports publishing, replies, insights, and profile/media operations.",
      "mcpStatus": "No official Threads MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Meta app review and account eligibility.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.facebook.com/docs/threads",
        "https://developers.facebook.com/docs/threads/get-started"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 40,
      "name": "SendGrid",
      "category": "Marketing, Ads, Email and Social",
      "hint": "sendgrid.com",
      "summary": "Email delivery and marketing API service.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST APIs for mail send, templates, contacts, suppression, stats, and webhooks.",
      "mcpStatus": "No official SendGrid MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Sender authentication and email compliance.",
      "confidence": "high",
      "evidenceUrls": [
        "https://www.twilio.com/docs/sendgrid/api-reference",
        "https://www.twilio.com/docs/sendgrid/ui/account-and-settings/api-keys"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 41,
      "name": "Shopify",
      "category": "Ecommerce",
      "hint": "shopify.dev",
      "summary": "Commerce platform for stores, products, orders, and storefronts.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Very broad Admin GraphQL/REST, Storefront, webhooks, checkout, and app APIs.",
      "mcpStatus": "No official Shopify MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "App install, scopes, and store/admin permissions.",
      "confidence": "high",
      "evidenceUrls": [
        "https://shopify.dev/docs/api",
        "https://shopify.dev/docs/apps/build/authentication-authorization"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 42,
      "name": "WooCommerce",
      "category": "Ecommerce",
      "hint": "woocommerce.com/document/woocommerce-rest-api",
      "summary": "WordPress ecommerce plugin.",
      "authMethods": [
        "consumer key/secret",
        "Basic",
        "OAuth1"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for products, orders, customers, coupons, reports, and settings.",
      "mcpStatus": "No official WooCommerce MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Per-store WordPress setup and auth mode differences.",
      "confidence": "high",
      "evidenceUrls": [
        "https://woocommerce.github.io/woocommerce-rest-api-docs/",
        "https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 43,
      "name": "BigCommerce",
      "category": "Ecommerce",
      "hint": "developer.bigcommerce.com",
      "summary": "SaaS ecommerce platform.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST and GraphQL APIs for catalog, orders, carts, channels, storefront, and webhooks.",
      "mcpStatus": "No official BigCommerce MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Store app scopes and marketplace review if public.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.bigcommerce.com/docs/start",
        "https://developer.bigcommerce.com/docs/start/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 44,
      "name": "Salesforce Commerce Cloud",
      "category": "Ecommerce",
      "hint": "developer.salesforce.com/docs/commerce",
      "summary": "Enterprise ecommerce platform from Salesforce.",
      "authMethods": [
        "OAuth2",
        "client credentials"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "SCAPI and OCAPI surfaces for shoppers, products, baskets, orders, and admin operations.",
      "mcpStatus": "No official SFCC MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Commerce tenant access and Salesforce admin setup.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.salesforce.com/docs/commerce/commerce-api",
        "https://developer.salesforce.com/docs/commerce/commerce-api/guide/authorization-for-shopper-apis.html"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 45,
      "name": "Magento (Adobe Commerce)",
      "category": "Ecommerce",
      "hint": "developer.adobe.com/commerce",
      "summary": "Open-source and enterprise ecommerce platform.",
      "authMethods": [
        "OAuth1",
        "OAuth2",
        "Bearer token",
        "integration token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST, GraphQL, and admin APIs for catalog, carts, orders, customers, and modules.",
      "mcpStatus": "No official Magento MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Store version and extension-specific schema differences.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.adobe.com/commerce/webapi/rest/",
        "https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-token/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 46,
      "name": "Squarespace",
      "category": "Ecommerce",
      "hint": "developers.squarespace.com",
      "summary": "Website builder with commerce and content features.",
      "authMethods": [
        "OAuth2",
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public APIs for commerce inventory/orders/products and profiles; narrower than Shopify.",
      "mcpStatus": "No official Squarespace MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Narrower API surface and app approval for OAuth.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.squarespace.com/",
        "https://developers.squarespace.com/oauth"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 47,
      "name": "Ecwid",
      "category": "Ecommerce",
      "hint": "api-docs.ecwid.com",
      "summary": "Ecommerce platform for adding stores to websites and social channels.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for products, orders, customers, carts, coupons, and webhooks.",
      "mcpStatus": "No official Ecwid MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Store token setup and plan limits.",
      "confidence": "high",
      "evidenceUrls": [
        "https://api-docs.ecwid.com/reference/rest-api-overview",
        "https://api-docs.ecwid.com/reference/access-token"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 48,
      "name": "Gumroad",
      "category": "Ecommerce",
      "hint": "gumroad.com/api",
      "summary": "Creator commerce platform for selling digital products.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public API for products, sales, subscribers, licenses, and resource subscriptions.",
      "mcpStatus": "No official Gumroad MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Narrow API surface but enough for creator commerce actions.",
      "confidence": "high",
      "evidenceUrls": [
        "https://gumroad.com/api",
        "https://gumroad.com/api#section/Authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 49,
      "name": "Amazon Selling Partner",
      "category": "Ecommerce",
      "hint": "developer-docs.amazon.com/sp-api",
      "summary": "Amazon marketplace seller and vendor API platform.",
      "authMethods": [
        "OAuth2",
        "LWA",
        "AWS SigV4"
      ],
      "credentialAccess": "partner-gated",
      "apiSurface": "Broad SP-API for listings, orders, reports, feeds, finances, ads-adjacent data, and notifications.",
      "mcpStatus": "No official Amazon SP-API MCP found in baseline.",
      "buildability": "outreach-needed",
      "mainBlocker": "Developer registration, role approval, and AWS signing complexity.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer-docs.amazon.com/sp-api/docs",
        "https://developer-docs.amazon.com/sp-api/docs/connecting-to-the-selling-partner-api"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 50,
      "name": "fanbasis",
      "category": "Ecommerce",
      "hint": "fanbasis.com",
      "summary": "Creator monetization and fan engagement platform.",
      "authMethods": [
        "unknown"
      ],
      "credentialAccess": "unclear",
      "apiSurface": "Public API documentation was not clearly discoverable in baseline.",
      "mcpStatus": "No official fanbasis MCP found in baseline.",
      "buildability": "not-today",
      "mainBlocker": "No obvious public developer API path.",
      "confidence": "low",
      "evidenceUrls": [
        "https://www.fanbasis.com/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 51,
      "name": "DataForSEO",
      "category": "Data, SEO and Scraping",
      "hint": "docs.dataforseo.com",
      "summary": "SEO and search data APIs for SERP, keywords, backlinks, and traffic.",
      "authMethods": [
        "Basic",
        "API login/password"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST APIs for SERP, keywords, backlinks, domain analytics, merchant, and on-page data.",
      "mcpStatus": "No official DataForSEO MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Credit pricing and many endpoint families.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.dataforseo.com/v3/",
        "https://docs.dataforseo.com/v3/appendix-user-data/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 52,
      "name": "SE Ranking",
      "category": "Data, SEO and Scraping",
      "hint": "seranking.com/api",
      "summary": "SEO platform with rank tracking, audits, and competitive research.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "REST API for rankings, keywords, sites, competitors, and account data.",
      "mcpStatus": "No official SE Ranking MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "API access tied to paid plan/account limits.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://seranking.com/api.html"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 53,
      "name": "Ahrefs",
      "category": "Data, SEO and Scraping",
      "hint": "ahrefs.com/api",
      "summary": "SEO analytics platform for backlinks, keywords, and competitive research.",
      "authMethods": [
        "API token"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "Documented API for site explorer and SEO data; access is plan/API gated.",
      "mcpStatus": "No official Ahrefs MCP found in baseline.",
      "buildability": "outreach-needed",
      "mainBlocker": "API access and pricing are a significant gate.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://docs.ahrefs.com/docs/api/site-explorer/overview",
        "https://ahrefs.com/api"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 54,
      "name": "MrScraper",
      "category": "Data, SEO and Scraping",
      "hint": "docs.mrscraper.com",
      "summary": "Web scraping and data extraction platform.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for scraper jobs, tasks, runs, and extracted data.",
      "mcpStatus": "No official MrScraper MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Need confirm endpoint breadth and job semantics.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://docs.mrscraper.com/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 55,
      "name": "Apify",
      "category": "Data, SEO and Scraping",
      "hint": "docs.apify.com",
      "summary": "Cloud platform for actors, scraping, automation, and datasets.",
      "authMethods": [
        "API token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST API for actors, runs, datasets, key-value stores, schedules, and webhooks.",
      "mcpStatus": "Community MCP servers exist; no official Apify MCP confirmed in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Actor input schemas vary per integration.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.apify.com/api/v2",
        "https://docs.apify.com/platform/integrations/api"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 56,
      "name": "Firecrawl",
      "category": "Data, SEO and Scraping",
      "hint": "firecrawl.dev",
      "summary": "Web crawling, scraping, search, and extraction API for AI apps.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API and CLI for scrape, crawl, map, search, extract, and agent workflows.",
      "mcpStatus": "Official Firecrawl MCP integration exists.",
      "buildability": "easy-win",
      "mainBlocker": "Credit controls and extraction schema design.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.firecrawl.dev/api-reference/introduction",
        "https://docs.firecrawl.dev/mcp-server"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 57,
      "name": "Bright Data",
      "category": "Data, SEO and Scraping",
      "hint": "brightdata.com",
      "summary": "Proxy, scraping, datasets, and web data platform.",
      "authMethods": [
        "API key",
        "Basic",
        "token"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "APIs for proxies, Web Unlocker, scraping browser, datasets, and collectors.",
      "mcpStatus": "No official Bright Data MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Paid account, compliance, and product-specific setup.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://docs.brightdata.com/api-reference/introduction",
        "https://docs.brightdata.com/general/account/api-token"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 58,
      "name": "Sherlock",
      "category": "Data, SEO and Scraping",
      "hint": "github.com/sherlock-project/sherlock",
      "summary": "Open-source CLI for finding usernames across social networks.",
      "authMethods": [
        "none"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Open-source CLI/library rather than hosted SaaS API.",
      "mcpStatus": "No official Sherlock MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Would be a local tool wrapper, not an authenticated SaaS toolkit.",
      "confidence": "high",
      "evidenceUrls": [
        "https://github.com/sherlock-project/sherlock"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 59,
      "name": "Waterfall.io",
      "category": "Data, SEO and Scraping",
      "hint": "waterfall.io",
      "summary": "Contact and company intelligence platform.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "API access appears available for enrichment-style workflows but public docs are limited.",
      "mcpStatus": "No official Waterfall MCP found in baseline.",
      "buildability": "outreach-needed",
      "mainBlocker": "Credential access and public docs are gated/unclear.",
      "confidence": "low",
      "evidenceUrls": [
        "https://www.waterfall.io/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 60,
      "name": "Clay",
      "category": "Data, SEO and Scraping",
      "hint": "clay.com",
      "summary": "Sales prospecting and enrichment automation workspace.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "API/webhook capabilities exist around tables and enrichment, but public API breadth is limited.",
      "mcpStatus": "No official Clay MCP found in baseline.",
      "buildability": "needs-review",
      "mainBlocker": "API access and stable public docs need confirmation.",
      "confidence": "low",
      "evidenceUrls": [
        "https://docs.clay.com/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 61,
      "name": "GitHub",
      "category": "Developer, Infra and Data platforms",
      "hint": "docs.github.com/rest",
      "summary": "Developer platform for code hosting, issues, actions, packages, and collaboration.",
      "authMethods": [
        "OAuth2",
        "GitHub App",
        "fine-grained token",
        "PAT"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Very broad REST and GraphQL APIs across repos, issues, PRs, actions, orgs, users, and security.",
      "mcpStatus": "Official GitHub MCP Server exists.",
      "buildability": "easy-win",
      "mainBlocker": "Permission model and org install review.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.github.com/en/rest",
        "https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps",
        "https://github.com/github/github-mcp-server"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 62,
      "name": "Vercel",
      "category": "Developer, Infra and Data platforms",
      "hint": "vercel.com/docs/rest-api",
      "summary": "Frontend cloud platform for deployments, projects, domains, and teams.",
      "authMethods": [
        "Bearer token",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for projects, deployments, domains, teams, env vars, logs, and integrations.",
      "mcpStatus": "No official Vercel MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Team/project permissions and deployment side effects.",
      "confidence": "high",
      "evidenceUrls": [
        "https://vercel.com/docs/rest-api",
        "https://vercel.com/docs/rest-api#authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 63,
      "name": "Netlify",
      "category": "Developer, Infra and Data platforms",
      "hint": "docs.netlify.com/api",
      "summary": "Web deployment and hosting platform.",
      "authMethods": [
        "OAuth2",
        "personal access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for sites, deploys, forms, functions, env vars, and accounts.",
      "mcpStatus": "No official Netlify MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Team permissions and deployment safety.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.netlify.com/api/get-started/",
        "https://docs.netlify.com/api/get-started/#authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 64,
      "name": "Cloudflare",
      "category": "Developer, Infra and Data platforms",
      "hint": "developers.cloudflare.com/api",
      "summary": "Internet infrastructure platform for DNS, CDN, workers, security, and storage.",
      "authMethods": [
        "API token",
        "API key",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Very broad REST and GraphQL APIs across zones, DNS, Workers, R2, accounts, analytics, and security.",
      "mcpStatus": "No official Cloudflare MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Huge surface requires scoped toolkit design.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.cloudflare.com/api/",
        "https://developers.cloudflare.com/fundamentals/api/get-started/create-token/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 65,
      "name": "Supabase",
      "category": "Developer, Infra and Data platforms",
      "hint": "supabase.com/docs",
      "summary": "Backend platform for Postgres, auth, storage, functions, and realtime.",
      "authMethods": [
        "API key",
        "JWT",
        "OAuth2 for management"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST/PostgREST, GraphQL, Auth, Storage, Realtime, Edge Functions, and Management APIs.",
      "mcpStatus": "No official Supabase MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Project keys and RLS/security policy handling.",
      "confidence": "high",
      "evidenceUrls": [
        "https://supabase.com/docs",
        "https://supabase.com/docs/guides/api",
        "https://supabase.com/docs/reference/api/introduction"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 66,
      "name": "Neo4j",
      "category": "Developer, Infra and Data platforms",
      "hint": "neo4j.com/docs/api",
      "summary": "Graph database platform and cloud service.",
      "authMethods": [
        "Basic",
        "Bearer token",
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Database drivers plus Aura management APIs; not a single SaaS REST surface.",
      "mcpStatus": "No official Neo4j MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Agent toolkit may need driver-level graph query operations plus Aura admin APIs.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://neo4j.com/docs/api/",
        "https://neo4j.com/docs/aura/platform/api/overview/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 67,
      "name": "Snowflake",
      "category": "Developer, Infra and Data platforms",
      "hint": "docs.snowflake.com",
      "summary": "Cloud data warehouse and data platform.",
      "authMethods": [
        "key pair JWT",
        "OAuth2",
        "password",
        "SAML"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "SQL API, Snowpark, Cortex, management APIs, and drivers for data operations.",
      "mcpStatus": "No official Snowflake MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Enterprise auth, warehouse permissions, and data safety.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.snowflake.com/en/developer-guide/sql-api/index",
        "https://docs.snowflake.com/en/user-guide/oauth-intro"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 68,
      "name": "MongoDB Atlas",
      "category": "Developer, Infra and Data platforms",
      "hint": "mongodb.com/docs/atlas/api",
      "summary": "Managed MongoDB database platform.",
      "authMethods": [
        "API key",
        "OAuth2",
        "Digest"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Atlas Admin API for projects, clusters, users, backups, monitoring, and data services.",
      "mcpStatus": "No official MongoDB Atlas MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Project/org roles and database data access separation.",
      "confidence": "high",
      "evidenceUrls": [
        "https://www.mongodb.com/docs/atlas/api/",
        "https://www.mongodb.com/docs/atlas/configure-api-access/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 69,
      "name": "Datadog",
      "category": "Developer, Infra and Data platforms",
      "hint": "docs.datadoghq.com/api",
      "summary": "Observability platform for metrics, logs, traces, monitors, and security.",
      "authMethods": [
        "API key",
        "application key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Very broad REST APIs for metrics, logs, monitors, dashboards, incidents, synthetics, and events.",
      "mcpStatus": "No official Datadog MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Read/write safety and regional sites.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.datadoghq.com/api/latest/",
        "https://docs.datadoghq.com/account_management/api-app-keys/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 70,
      "name": "Sentry",
      "category": "Developer, Infra and Data platforms",
      "hint": "docs.sentry.io/api",
      "summary": "Error monitoring and performance platform.",
      "authMethods": [
        "OAuth2",
        "auth token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for projects, issues, events, releases, orgs, teams, and monitors.",
      "mcpStatus": "No official Sentry MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Org/project permissions and token scopes.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.sentry.io/api/",
        "https://docs.sentry.io/api/auth/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 71,
      "name": "Notion",
      "category": "Productivity and Project Management",
      "hint": "developers.notion.com",
      "summary": "Workspace for docs, databases, notes, and collaboration.",
      "authMethods": [
        "OAuth2",
        "internal integration token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Public REST API for pages, databases, blocks, comments, users, and search.",
      "mcpStatus": "No official Notion MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Workspace install and database schema variation.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.notion.com/reference/intro",
        "https://developers.notion.com/docs/authorization"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 72,
      "name": "Airtable",
      "category": "Productivity and Project Management",
      "hint": "airtable.com/developers",
      "summary": "Spreadsheet-database platform for operational workflows.",
      "authMethods": [
        "OAuth2",
        "personal access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Web API for bases, tables, records, metadata, webhooks, and scripting-adjacent workflows.",
      "mcpStatus": "No official Airtable MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Base schema discovery and rate limits.",
      "confidence": "high",
      "evidenceUrls": [
        "https://airtable.com/developers/web/api/introduction",
        "https://airtable.com/developers/web/api/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 73,
      "name": "Linear",
      "category": "Productivity and Project Management",
      "hint": "developers.linear.app",
      "summary": "Issue tracking and product planning platform.",
      "authMethods": [
        "OAuth2",
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "GraphQL API for issues, projects, teams, cycles, comments, documents, and webhooks.",
      "mcpStatus": "No official Linear MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "GraphQL operation design and workspace scopes.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.linear.app/docs/graphql/working-with-the-graphql-api",
        "https://developers.linear.app/docs/oauth/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 74,
      "name": "Jira",
      "category": "Productivity and Project Management",
      "hint": "developer.atlassian.com",
      "summary": "Atlassian issue tracking and project management platform.",
      "authMethods": [
        "OAuth2",
        "API token",
        "Basic"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad REST APIs for issues, projects, boards, users, workflows, and webhooks.",
      "mcpStatus": "No official Jira MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Atlassian Cloud auth variants and admin permissions.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/",
        "https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 75,
      "name": "Asana",
      "category": "Productivity and Project Management",
      "hint": "developers.asana.com",
      "summary": "Work management platform for tasks, projects, portfolios, and goals.",
      "authMethods": [
        "OAuth2",
        "personal access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for tasks, projects, users, teams, goals, portfolios, and webhooks.",
      "mcpStatus": "No official Asana MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Workspace permissions and project schema variation.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.asana.com/docs",
        "https://developers.asana.com/docs/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 76,
      "name": "Monday.com",
      "category": "Productivity and Project Management",
      "hint": "developer.monday.com",
      "summary": "Work operating system for boards, automations, and business workflows.",
      "authMethods": [
        "OAuth2",
        "API token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "GraphQL API for boards, items, columns, users, automations, apps, and webhooks.",
      "mcpStatus": "No official Monday MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "GraphQL schema and board-column typing.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.monday.com/api-reference/docs",
        "https://developer.monday.com/api-reference/docs/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 77,
      "name": "ClickUp",
      "category": "Productivity and Project Management",
      "hint": "clickup.com/api",
      "summary": "Productivity and project management platform.",
      "authMethods": [
        "OAuth2",
        "API token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for tasks, lists, folders, spaces, users, comments, docs, time, and webhooks.",
      "mcpStatus": "No official ClickUp MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Workspace hierarchy and permission mapping.",
      "confidence": "high",
      "evidenceUrls": [
        "https://clickup.com/api",
        "https://clickup.com/api/developer-portal/authentication/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 78,
      "name": "Coda",
      "category": "Productivity and Project Management",
      "hint": "coda.io/developers",
      "summary": "Document and table platform for collaborative apps.",
      "authMethods": [
        "OAuth2",
        "API token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for docs, tables, rows, formulas, controls, pages, and webhooks.",
      "mcpStatus": "No official Coda MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Doc/table schema discovery.",
      "confidence": "high",
      "evidenceUrls": [
        "https://coda.io/developers/apis/v1",
        "https://coda.io/developers/apis/v1#section/Authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 79,
      "name": "Smartsheet",
      "category": "Productivity and Project Management",
      "hint": "smartsheet.com/developers",
      "summary": "Work management and spreadsheet-style project platform.",
      "authMethods": [
        "OAuth2",
        "access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for sheets, rows, columns, reports, workspaces, attachments, and webhooks.",
      "mcpStatus": "No official Smartsheet MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Enterprise/admin permissions and sheet schema.",
      "confidence": "high",
      "evidenceUrls": [
        "https://smartsheet.redoc.ly/",
        "https://smartsheet.redoc.ly/tag/oauth"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 80,
      "name": "Harvest",
      "category": "Productivity and Project Management",
      "hint": "help.getharvest.com/api-v2",
      "summary": "Time tracking and invoicing platform.",
      "authMethods": [
        "OAuth2",
        "personal access token"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST API for time entries, projects, clients, users, invoices, expenses, and reports.",
      "mcpStatus": "No official Harvest MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Account ID header and time-entry safety.",
      "confidence": "high",
      "evidenceUrls": [
        "https://help.getharvest.com/api-v2/",
        "https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 81,
      "name": "Stripe",
      "category": "Finance and Fintech",
      "hint": "stripe.com/docs/api",
      "summary": "Payments platform for charges, checkout, billing, connect, and financial workflows.",
      "authMethods": [
        "API key",
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Extremely broad REST API for payments, customers, subscriptions, invoices, payouts, Connect, and webhooks.",
      "mcpStatus": "No official Stripe MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Money movement safety and test/live mode separation.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.stripe.com/api",
        "https://docs.stripe.com/keys"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 82,
      "name": "Plaid",
      "category": "Finance and Fintech",
      "hint": "plaid.com/docs",
      "summary": "Financial data connectivity API for bank accounts and transactions.",
      "authMethods": [
        "client_id/secret",
        "OAuth2-like institution flows"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Broad APIs for Auth, Transactions, Identity, Investments, Liabilities, Income, and webhooks.",
      "mcpStatus": "No official Plaid MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Financial compliance, user consent, and product access approval.",
      "confidence": "high",
      "evidenceUrls": [
        "https://plaid.com/docs/api/",
        "https://plaid.com/docs/api/tokens/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 83,
      "name": "Binance",
      "category": "Finance and Fintech",
      "hint": "binance-docs.github.io",
      "summary": "Crypto exchange APIs for trading, market data, and account operations.",
      "authMethods": [
        "API key/secret",
        "HMAC"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "REST and WebSocket APIs for market data, spot, futures, account, and trading.",
      "mcpStatus": "No official Binance MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Trading risk, regional access, and key permissions.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developers.binance.com/docs/binance-spot-api-docs/rest-api",
        "https://developers.binance.com/docs/binance-spot-api-docs/rest-api/request-security"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 84,
      "name": "Paygent Connect",
      "category": "Finance and Fintech",
      "hint": "paygent.com",
      "summary": "Payment gateway/connectivity platform associated with NMI-powered payments.",
      "authMethods": [
        "API key",
        "token"
      ],
      "credentialAccess": "partner-gated",
      "apiSurface": "Public developer docs are limited; likely payment gateway API access for merchants/partners.",
      "mcpStatus": "No official Paygent Connect MCP found in baseline.",
      "buildability": "outreach-needed",
      "mainBlocker": "Docs and credential access appear partner or merchant gated.",
      "confidence": "low",
      "evidenceUrls": [
        "https://www.paygent.com/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 85,
      "name": "iPayX",
      "category": "Finance and Fintech",
      "hint": "ipayx.ai/docs",
      "summary": "Payments and AI-oriented finance platform.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "unclear",
      "apiSurface": "Docs are hinted but public API breadth needs confirmation.",
      "mcpStatus": "No official iPayX MCP found in baseline.",
      "buildability": "needs-review",
      "mainBlocker": "Unclear public documentation and credential path.",
      "confidence": "low",
      "evidenceUrls": [
        "https://ipayx.ai/docs"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 86,
      "name": "QuickBooks",
      "category": "Finance and Fintech",
      "hint": "developer.intuit.com",
      "summary": "Accounting platform from Intuit.",
      "authMethods": [
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Accounting, payments, payroll-adjacent, reports, company, invoices, bills, and customer APIs.",
      "mcpStatus": "No official QuickBooks MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "OAuth app review, sandbox/company realm setup, and accounting safety.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account",
        "https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 87,
      "name": "Xero",
      "category": "Finance and Fintech",
      "hint": "developer.xero.com",
      "summary": "Cloud accounting platform.",
      "authMethods": [
        "OAuth2"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Accounting, contacts, invoices, bank transactions, payroll, files, projects, and webhooks APIs.",
      "mcpStatus": "No official Xero MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Tenant connection and accounting write safety.",
      "confidence": "high",
      "evidenceUrls": [
        "https://developer.xero.com/documentation/api/accounting/overview",
        "https://developer.xero.com/documentation/guides/oauth2/overview/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 88,
      "name": "Brex",
      "category": "Finance and Fintech",
      "hint": "developer.brex.com",
      "summary": "Corporate cards, spend management, banking, and expense platform.",
      "authMethods": [
        "OAuth2",
        "API token"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "APIs for expenses, cards, transactions, vendors, users, budgets, and webhooks.",
      "mcpStatus": "No official Brex MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Customer admin approval and sensitive financial scopes.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://developer.brex.com/openapi",
        "https://developer.brex.com/docs/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 89,
      "name": "Ramp",
      "category": "Finance and Fintech",
      "hint": "docs.ramp.com",
      "summary": "Corporate card and spend management platform.",
      "authMethods": [
        "OAuth2",
        "client credentials"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "REST APIs for users, departments, cards, transactions, reimbursements, bills, and webhooks.",
      "mcpStatus": "No official Ramp MCP found in baseline.",
      "buildability": "buildable",
      "mainBlocker": "Admin authorization and spend-control safety.",
      "confidence": "high",
      "evidenceUrls": [
        "https://docs.ramp.com/developer-api/v1/overview/introduction",
        "https://docs.ramp.com/developer-api/v1/overview/authentication"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 90,
      "name": "PitchBook",
      "category": "Finance and Fintech",
      "hint": "pitchbook.com",
      "summary": "Private market data and research platform.",
      "authMethods": [
        "API key",
        "token"
      ],
      "credentialAccess": "partner-gated",
      "apiSurface": "Research/data API access is enterprise-gated; public self-serve developer path is limited.",
      "mcpStatus": "No official PitchBook MCP found in baseline.",
      "buildability": "outreach-needed",
      "mainBlocker": "Enterprise data licensing and API access gate.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://pitchbook.com/products/data/api"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 91,
      "name": "NotebookLM",
      "category": "AI, Research and Media-native",
      "hint": "cloud.google.com/gemini",
      "summary": "Google AI notebook/research product; enterprise path overlaps Gemini/Vertex AI APIs.",
      "authMethods": [
        "OAuth2",
        "service account",
        "API key"
      ],
      "credentialAccess": "admin-gated",
      "apiSurface": "No direct public NotebookLM API baseline; agent path likely through Gemini/Vertex AI rather than NotebookLM consumer UI.",
      "mcpStatus": "No official NotebookLM MCP found in baseline.",
      "buildability": "needs-review",
      "mainBlocker": "Product-specific API is unclear; enterprise Gemini APIs are buildable but not NotebookLM itself.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://cloud.google.com/vertex-ai/generative-ai/docs",
        "https://ai.google.dev/gemini-api/docs"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 92,
      "name": "Otter AI",
      "category": "AI, Research and Media-native",
      "hint": "help.otter.ai",
      "summary": "Meeting transcription and notes platform.",
      "authMethods": [
        "OAuth2",
        "token"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "Public API path is limited; docs mention MCP server path for meeting note access.",
      "mcpStatus": "Otter help/docs mention MCP server availability.",
      "buildability": "needs-review",
      "mainBlocker": "Credential access and API breadth need account-level confirmation.",
      "confidence": "low",
      "evidenceUrls": [
        "https://help.otter.ai/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 93,
      "name": "Fathom",
      "category": "AI, Research and Media-native",
      "hint": "fathom.video",
      "summary": "AI meeting recorder and note-taking product.",
      "authMethods": [
        "API key",
        "OAuth2"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "API availability appears account/product gated with limited public docs.",
      "mcpStatus": "No official Fathom MCP found in baseline.",
      "buildability": "needs-review",
      "mainBlocker": "Public API docs and self-serve credentials are unclear.",
      "confidence": "low",
      "evidenceUrls": [
        "https://fathom.video/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 94,
      "name": "Consensus",
      "category": "AI, Research and Media-native",
      "hint": "consensus.app",
      "summary": "AI research search engine for scientific papers.",
      "authMethods": [
        "OAuth2",
        "API key"
      ],
      "credentialAccess": "unclear",
      "apiSurface": "Public API/OAuth path appears requested or limited; self-serve docs need confirmation.",
      "mcpStatus": "No official Consensus MCP found in baseline.",
      "buildability": "needs-review",
      "mainBlocker": "OAuth/API access appears not broadly public.",
      "confidence": "low",
      "evidenceUrls": [
        "https://consensus.app/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 95,
      "name": "Reducto",
      "category": "AI, Research and Media-native",
      "hint": "reducto.ai",
      "summary": "Document parsing and extraction API for complex documents.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "API for document parsing, extraction, splitting, OCR, and structured outputs.",
      "mcpStatus": "No official Reducto MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Document processing costs and file handling.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://docs.reducto.ai/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 96,
      "name": "Devin",
      "category": "AI, Research and Media-native",
      "hint": "docs.devin.ai",
      "summary": "AI software engineering agent platform.",
      "authMethods": [
        "API key",
        "MCP"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "Docs expose API/MCP-oriented integration paths for controlling or connecting Devin.",
      "mcpStatus": "Official Devin MCP documentation exists.",
      "buildability": "buildable",
      "mainBlocker": "Account access and product availability.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://docs.devin.ai/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 97,
      "name": "higgsfield",
      "category": "AI, Research and Media-native",
      "hint": "higgsfield.ai/cli",
      "summary": "AI video/content generation suite with CLI-oriented workflow.",
      "authMethods": [
        "token",
        "CLI auth"
      ],
      "credentialAccess": "unclear",
      "apiSurface": "CLI is hinted, but stable public API/tooling breadth needs confirmation.",
      "mcpStatus": "No official Higgsfield MCP found in baseline.",
      "buildability": "needs-review",
      "mainBlocker": "Credential path and automatable API surface unclear.",
      "confidence": "low",
      "evidenceUrls": [
        "https://higgsfield.ai/cli"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 98,
      "name": "Mermaid CLI",
      "category": "AI, Research and Media-native",
      "hint": "github.com/mermaid-js/mermaid-cli",
      "summary": "Command-line renderer for Mermaid diagrams.",
      "authMethods": [
        "none"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "Open-source CLI package, not a hosted API; agent tool can wrap local command execution.",
      "mcpStatus": "No official Mermaid CLI MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Sandboxing local file rendering and dependency installation.",
      "confidence": "high",
      "evidenceUrls": [
        "https://github.com/mermaid-js/mermaid-cli"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 99,
      "name": "YouTube Transcript",
      "category": "AI, Research and Media-native",
      "hint": "transcriptapi.com",
      "summary": "Transcript API service for YouTube videos.",
      "authMethods": [
        "API key"
      ],
      "credentialAccess": "self-serve",
      "apiSurface": "API for retrieving YouTube transcripts and metadata-like transcript outputs.",
      "mcpStatus": "No official YouTube Transcript MCP found in baseline.",
      "buildability": "easy-win",
      "mainBlocker": "Service reliability and video availability constraints.",
      "confidence": "medium",
      "evidenceUrls": [
        "https://transcriptapi.com/"
      ],
      "source": "curated-baseline",
      "verified": false
    },
    {
      "id": 100,
      "name": "Grain",
      "category": "AI, Research and Media-native",
      "hint": "grain.com",
      "summary": "Meeting recording, clips, notes, and conversation intelligence platform.",
      "authMethods": [
        "API key",
        "OAuth2"
      ],
      "credentialAccess": "paid-or-trial-gated",
      "apiSurface": "API or integration surface appears limited/account gated in public docs.",
      "mcpStatus": "No official Grain MCP found in baseline.",
      "buildability": "needs-review",
      "mainBlocker": "Public API docs and credential access need confirmation.",
      "confidence": "low",
      "evidenceUrls": [
        "https://grain.com/"
      ],
      "source": "curated-baseline",
      "verified": false
    }
  ],
  "verification": {
    "method": "Stratified sample across categories, auth types, credential-access patterns, and low-confidence rows. Manual checks used official docs; Browser Use trigger is provided for repeatable browser verification.",
    "firstPass": {
      "sampleSize": 16,
      "correct": 11,
      "partial": 3,
      "wrong": 2,
      "accuracy": 0.69
    },
    "afterVerification": {
      "sampleSize": 16,
      "correct": 14,
      "partial": 2,
      "wrong": 0,
      "accuracy": 0.88
    },
    "checks": [
      {
        "app": "HubSpot",
        "claim": "Self-serve CRM API with OAuth/private app token and broad CRM surface.",
        "result": "hit",
        "whatChanged": "Updated evidence to latest date-versioned API reference.",
        "evidenceUrl": "https://developers.hubspot.com/docs/api-reference/latest/overview"
      },
      {
        "app": "Slack",
        "claim": "OAuth2, bot/user tokens, broad app platform.",
        "result": "hit",
        "whatChanged": "Kept classification as easy-win, with scope/app-install caveat.",
        "evidenceUrl": "https://docs.slack.dev/authentication/"
      },
      {
        "app": "LinkedIn Ads",
        "claim": "Marketing API is gated by program/access tiers and ad account roles.",
        "result": "hit",
        "whatChanged": "Changed blocker wording from generic app review to Development Tier/Marketing API Program access.",
        "evidenceUrl": "https://learn.microsoft.com/en-us/linkedin/marketing/getting-started"
      },
      {
        "app": "Amazon Selling Partner",
        "claim": "SP-API is buildable but developer registration/approval and AWS signing are blockers.",
        "result": "hit",
        "whatChanged": "Kept outreach-needed because access requires seller/developer registration.",
        "evidenceUrl": "https://developer-docs.amazon.com/sp-api/docs/sp-api-registration-overview"
      },
      {
        "app": "Firecrawl",
        "claim": "Official MCP integration exists.",
        "result": "hit",
        "whatChanged": "Marked MCP status as official.",
        "evidenceUrl": "https://docs.firecrawl.dev/mcp-server"
      },
      {
        "app": "GitHub",
        "claim": "Official GitHub MCP Server exists.",
        "result": "hit",
        "whatChanged": "Marked as an easy-win with existing MCP proof.",
        "evidenceUrl": "https://github.com/github/github-mcp-server"
      },
      {
        "app": "Plain",
        "claim": "GraphQL support platform API with API-key authentication.",
        "result": "hit",
        "whatChanged": "Kept as easy-win but noted GraphQL schema mapping.",
        "evidenceUrl": "https://www.plain.com/docs/api-reference/introduction"
      },
      {
        "app": "Shopify",
        "claim": "Self-serve OAuth app platform with broad Admin APIs.",
        "result": "hit",
        "whatChanged": "No change beyond emphasizing app scopes.",
        "evidenceUrl": "https://shopify.dev/docs/apps/build/authentication-authorization"
      },
      {
        "app": "Snowflake",
        "claim": "Buildable but enterprise/admin-gated because auth and warehouse permissions matter.",
        "result": "hit",
        "whatChanged": "Kept buildable, not easy-win.",
        "evidenceUrl": "https://docs.snowflake.com/en/developer-guide/sql-api/index"
      },
      {
        "app": "Monday.com",
        "claim": "Self-serve GraphQL API for boards/items/workflows.",
        "result": "hit",
        "whatChanged": "Kept GraphQL-specific toolkit caveat.",
        "evidenceUrl": "https://developer.monday.com/api-reference/docs"
      },
      {
        "app": "Pumble",
        "claim": "API availability and breadth are unclear.",
        "result": "partial",
        "whatChanged": "Left low confidence rather than over-claiming Slack-like API breadth.",
        "evidenceUrl": "https://pumble.com/help/integrations/api/"
      },
      {
        "app": "systeme.io",
        "claim": "API is likely available but surface and credential path are unclear.",
        "result": "partial",
        "whatChanged": "Downgraded from buildable to needs-review.",
        "evidenceUrl": "https://developer.systeme.io/"
      },
      {
        "app": "Paygent Connect",
        "claim": "Payment API with key/token auth.",
        "result": "miss",
        "whatChanged": "Changed to partner-gated/low confidence because public docs were insufficient.",
        "evidenceUrl": "https://www.paygent.com/"
      },
      {
        "app": "NotebookLM",
        "claim": "Buildable through Gemini Enterprise API.",
        "result": "miss",
        "whatChanged": "Separated NotebookLM product from Gemini/Vertex AI APIs; marked needs-review.",
        "evidenceUrl": "https://cloud.google.com/vertex-ai/generative-ai/docs"
      },
      {
        "app": "Otter AI",
        "claim": "MCP/API exists for meeting notes.",
        "result": "partial",
        "whatChanged": "Kept low confidence until account-level docs can be verified.",
        "evidenceUrl": "https://help.otter.ai/"
      },
      {
        "app": "Mermaid CLI",
        "claim": "Local command wrapper is an easy agent tool despite no SaaS auth.",
        "result": "hit",
        "whatChanged": "Kept as local-tool easy-win, not API toolkit.",
        "evidenceUrl": "https://github.com/mermaid-js/mermaid-cli"
      }
    ]
  },
  "counts": {
    "total": 100,
    "buildability": {
      "buildable": 29,
      "easy-win": 52,
      "outreach-needed": 8,
      "needs-review": 10,
      "not-today": 1
    },
    "credentialAccess": {
      "admin-gated": 11,
      "self-serve": 67,
      "paid-or-trial-gated": 12,
      "unclear": 6,
      "partner-gated": 4
    },
    "confidence": {
      "high": 69,
      "medium": 19,
      "low": 12
    },
    "category": {
      "CRM and Sales": 10,
      "Support and Helpdesk": 10,
      "Communications and Messaging": 10,
      "Marketing, Ads, Email and Social": 10,
      "Ecommerce": 10,
      "Data, SEO and Scraping": 10,
      "Developer, Infra and Data platforms": 10,
      "Productivity and Project Management": 10,
      "Finance and Fintech": 10,
      "AI, Research and Media-native": 10
    },
    "authMethods": {
      "OAuth2": 66,
      "JWT bearer": 1,
      "session token": 1,
      "private app token": 1,
      "API token": 13,
      "access token": 10,
      "API key": 39,
      "app auth": 1,
      "Basic": 10,
      "user email": 1,
      "token": 6,
      "bot token": 3,
      "user token": 1,
      "Account SID/Auth Token": 1,
      "app access token": 1,
      "tenant access token": 1,
      "MTProto auth": 1,
      "system user token": 1,
      "business token": 1,
      "API key/secret": 2,
      "JWT": 2,
      "developer token": 1,
      "consumer key/secret": 1,
      "OAuth1": 2,
      "client credentials": 2,
      "Bearer token": 3,
      "integration token": 1,
      "LWA": 1,
      "AWS SigV4": 1,
      "unknown": 1,
      "API login/password": 1,
      "none": 2,
      "GitHub App": 1,
      "fine-grained token": 1,
      "PAT": 1,
      "personal access token": 4,
      "OAuth2 for management": 1,
      "key pair JWT": 1,
      "password": 1,
      "SAML": 1,
      "Digest": 1,
      "application key": 1,
      "auth token": 1,
      "internal integration token": 1,
      "client_id/secret": 1,
      "OAuth2-like institution flows": 1,
      "HMAC": 1,
      "service account": 1,
      "MCP": 1,
      "CLI auth": 1
    }
  },
  "insights": [
    "52 of 100 apps look toolkit-buildable with low commercial friction.",
    "27 apps need admin, paid, or partner access before a useful toolkit can ship.",
    "9 apps are outreach-first rather than engineering-first.",
    "OAuth2 dominates customer-data and collaboration apps; API keys dominate developer, scraping, and data platforms.",
    "The strongest easy wins are self-serve apps with broad REST/GraphQL APIs plus narrow action boundaries.",
    "The common blocker is not missing endpoints; it is credential access, app review, admin approval, or unsafe write actions."
  ]
};
