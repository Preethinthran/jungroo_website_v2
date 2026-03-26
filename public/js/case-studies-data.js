/**
 * Case Studies Data for Jungroo Web V2
 * Updated from Jungroo Case Studies.docx
 */

const caseStudies = [
  // ─── PUBLIC SECTOR / GOVTECH ───────────────────────────────
  {
    slug: "legal-reasoning-adjudication",
    title: "Legal Reasoning: Adjudication Intelligence",
    category: "Public Sector / GovTech",
    tags: ["AI in FinTech", "GovTech", "Legal AI", "Process Automation"],
    overview: `In collaboration with Zen Tax Clinic, Jungroo AI engineered a vertically integrated Legal Reasoning Fabric to transform the adjudication lifecycle. The system automates the transition from raw taxpayer data to structured, legally sound adjudication drafts—reducing turnaround from 72 hours to approximately 30 minutes per notice.`,
    challenge: {
      intro: `Institutional stakeholders in highly regulated domains faced a critical interpretative bottleneck in the adjudication lifecycle. Issuing a single adjudication order required a manual 72-hour cycle of document scrutiny, cross-referencing evolving codes, and analyzing historical case precedents. This manual process was vulnerable to "interpretative drift" where different officers might apply inconsistent logic to similar defaults risking legal defensibility.`,
      bulletPoints: []
    },
    solution: {
      intro: `In collaboration with Zen Tax Clinic, Jungroo AI engineered a vertically integrated Legal Reasoning Fabric featuring:`,
      bulletPoints: [
        { icon: 'SparklesIcon', text: "Domain-Specific Grounding: The reasoning engine underwent Continued Pre-training (CPT) on the complete corpus of statutory provisions and relevant precedents to ensure mathematical alignment with legal logic." },
        { icon: 'CubeIcon', text: "Deterministic Order Generation: An agentic workflow that automates the transition from raw data to a structured, legally sound adjudication draft." },
        { icon: 'ScaleIcon', text: "Contextual Provision Mapping: The system performs semantic logic checks, ensuring every flagged default is automatically mapped to the specific statutory provision it violates." },
        { icon: 'ShieldCheckIcon', text: "Standardization Engine: Eliminates subjective bias by enforcing a uniform reasoning template across all institutional nodes, ensuring that every order is robust enough to withstand judicial scrutiny." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      subtitle: "Operational Metrics",
      headers: ["Metric", "Manual (Before)", "Reasoning Layer (After)"],
      rows: [
        ["Adjudication Latency", "48–72 Hours per Notice", "~30 Minutes (Validated)"],
        ["Logic Consistency", "Subjective / User-dependent", "Deterministic / Statutory-aligned"],
        ["Data Residency", "Physical / Local Silos", "Private Institutional Memory"],
        ["Audit Posture", "Manual review required", "Machine-traceable Reasoning"]
      ]
    }
  },
  {
    slug: "national-digital-disbursement",
    title: "National Digital Disbursement Infrastructure (NDDI)",
    category: "Public Sector / GovTech",
    tags: ["GovTech", "Financial Inclusion", "Digital Transformation"],
    overview: `Jungroo AI and Finakon Technologies engineered a full-stack digital platform to modernize the interest subvention claim lifecycle under India's National Rural Livelihoods Mission (NRLM). The system replaces paper-based quarterly claims with a real-time digital platform featuring automated verification, centralized SHG management, and institutional-grade security.`,
    challenge: {
      intro: `The interest subvention claim lifecycle under India's National Rural Livelihoods Mission was entirely manual. Banks submitted quarterly claims via physical documents—original claim certificates, annexures, and paper trails. Stakeholders including NABARD and government officials had no real-time visibility into claim status or compliance posture. Meanwhile, managing financial records for millions of SHGs across the country produced chronic data inconsistencies and operational bottlenecks.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI and Finakon Technologies engineered a full-stack digital platform addressing Layer 3 (Knowledge Fabric) and Layer 4 (Application Interface):`,
      bulletPoints: [
        { icon: 'BuildingOfficeIcon', text: "Digital Claim Portal: Automated entry point for banks with real-time field validation, eliminating malformed claims at source." },
        { icon: 'ArrowPathIcon', text: "Automated Verification Engine (Layer 3): Claims are verified against NRLM guidelines automatically, cross-referencing system records to reduce manual error and processing time." },
        { icon: 'ServerStackIcon', text: "Centralized SHG Database: Single source of truth for SHG member details, loan information, and transaction histories across millions of rural groups." },
        { icon: 'ShieldCheckIcon', text: "Institutional-Grade Security: The platform underwent multiple OWASP security audits and independent testing rounds before production deployment to ensure the integrity of sovereign fund flows through multi-stakeholder access." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Manual (Before)", "NDDI System (After)"],
      rows: [
        ["Claim processing cycle", "Quarterly, Manual, Paper-based", "Digital, Automated, Validated"],
        ["Processing time", "Weeks to Months", "Drastically Reduced"],
        ["Stakeholder visibility", "None in real-time", "Real-time Dashboard Oversight"],
        ["Security posture", "No digital perimeter", "Hardened (OWASP Certified)"],
        ["Audit readiness", "Physical collection", "Instant Retrieval"]
      ]
    }
  },

  // ─── CUSTOMER INTELLIGENCE / AGENTIC SYSTEMS ──────────────
  {
    slug: "omni-channel-agentic-orchestration",
    title: "Omni-Channel & Voice-Native Platform: Agentic Orchestration",
    category: "Customer Intelligence / Agentic Systems",
    tags: ["Conversational AI", "Omni-Channel", "Voice AI", "Agentic Systems"],
    overview: `Jungroo AI engineered a vertically integrated Agent Builder Platform designed for high-stakes institutional orchestration. The platform unifies SMS, WhatsApp, Telegram, and Telephony into a single orchestration layer with private knowledgebase grounding, sub-second voice execution, and dynamic agentic workflows.`,
    challenge: {
      intro: `Organizations operated within a fragmented customer engagement landscape where SMS, WhatsApp, and Telephony systems functioned as disconnected silos. Legacy rule-based logic failed to handle nuanced queries, resulting in high human escalation rates (70%+). Furthermore, standard cloud-based voice APIs posed significant data residency risks for sensitive PII and lacked the ability to ground responses in private institutional knowledgebases.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI engineered a vertically integrated Agent Builder Platform designed for high-stakes institutional orchestration:`,
      bulletPoints: [
        { icon: 'AdjustmentsHorizontalIcon', text: "Multi-Model Configuration: A unified interface allowing for the granular configuration of **STT (Speech-to-Text)**, **LLM (Reasoning)**, and **TTS (Text-to-Speech)** parameters to optimize for domain-specific vocal nuances." },
        { icon: 'LockClosedIcon', text: "Private Knowledgebase Grounding: Direct semantic integration of internal technical documentation and SOPs, ensuring that voice and text agents are grounded in private institutional truth." },
        { icon: 'BoltIcon', text: "Low-Latency Voice Fabric: Proprietary voice rails optimized for sub-second execution, enabling natural, human-parity telephony automation." },
        { icon: 'ArrowTrendingUpIcon', text: "Omni-Channel WebSocket Sync: Real-time orchestration across digital and voice nodes (WhatsApp, Telegram, Telephony), ensuring instant context retention." },
        { icon: 'SparklesIcon', text: "Dynamic Flow Modulation: Agentic workflows that perform real-time generation of user metadata to adjust conversational paths on the fly." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Legacy Environment", "Builder Platform"],
      rows: [
        ["Operational Efficiency", "Manual / Rule-Based Silos", "70% Workload Reduction"],
        ["Response Latency", "High / Fragmented", "Sub-second Execution"],
        ["Human Escalation", "70% Escalation Rate", "<15% Escalation Rate"],
        ["Data Residency", "Public Cloud Egress", "100% Private (Zero Egress)"],
        ["Orchestration", "Disconnected Channels", "Unified WebSocket Fabric"]
      ]
    }
  },

  // ─── CLEAN TECH / REGULATED SYSTEMS ───────────────────────
  {
    slug: "sovereign-data-fabric",
    title: "Sovereign Data Fabric: Ingestion & Analytics Reasoning",
    category: "Clean Tech / Regulated Systems",
    tags: ["Data Ingestion", "Analytics AI", "Multi-Tenant Security", "Clean Tech"],
    overview: `Jungroo AI engineered a vertically integrated Semantic Intelligence Layer for a leading clean tech firm. The system bridges raw data streams and executive decision-making through cross-schema reasoning, domain-specific pre-training, autonomous ingestion, and on-the-fly visualization—all within a private, zero-egress data perimeter.`,
    challenge: {
      intro: `A leading clean tech firm managing sensitive sequestration IP and heterogeneous operational telemetry required a unified system to bridge the gap between raw data streams and executive decision-making. Cloud-native ETL and BI tools were non-viable due to strict regulatory compliance and data egress risks. Furthermore, generic models lacked the semantic depth to accurately navigate complex, non-standard schemas across SQL, Cypher, and JSON formats.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI engineered a vertically integrated Semantic Intelligence Layer (a private implementation of multi-modal reasoning) featuring:`,
      bulletPoints: [
        { icon: 'ServerStackIcon', text: "Cross-Schema Reasoning: A unified natural language interface capable of executing complex queries across relational (SQL), graph (Cypher), and semi-structured (JSON API) data streams." },
        { icon: 'SparklesIcon', text: "Domain-Specific Pre-training (CPT): The reasoning engine underwent Continued Pre-training on the client's internal technical documentation to ensure mathematical alignment with proprietary sequestration logic." },
        { icon: 'ArrowPathIcon', text: "Autonomous Ingestion Worker: A background agent that automates the transformation of heterogeneous sensor streams into a structured, semantic knowledge graph." },
        { icon: 'ChartBarIcon', text: "On-the-fly Visualization Engine: An agentic layer that dynamically interprets SQL/Cypher results to generate context-aware spatial maps and time-series visualizations." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Legacy Environment", "Sovereign Data Fabric"],
      rows: [
        ["Logic Mapping", "Generic / Error-prone", "Domain-specific (CPT) Grounding"],
        ["Query Latency", "Manual SQL (Hours/Days)", "Real-time Semantic Reasoning"],
        ["Data Perimeter", "Cloud-egress risks", "100% Private / No Egress"],
        ["Visualization", "Static, pre-built reports", "On-the-fly Dynamic Visuals"],
        ["Audit Posture", "Fragmented Access Logs", "Forensic Ingestion Ledger"]
      ]
    }
  },

  // ─── INSTITUTIONAL INTELLIGENCE ────────────────────────────
  {
    slug: "probabilistic-analysis-reasoning",
    title: "Probabilistic Analysis Reasoning",
    category: "Institutional Intelligence",
    tags: ["AI in Education", "Adaptive Learning", "Bayesian AI", "MDP"],
    overview: `Jungroo AI deployed an Adaptive Learning Engine that moves beyond simple regression to sequential state estimation. Using Bayesian networks and Markov Decision Processes, the engine performs real-time inference on latent proficiency, identifies prerequisite failures, and optimizes the learning path for each individual.`,
    challenge: {
      intro: `Institutional training and compliance frameworks often rely on static assessment models that fail to capture the sequential logic of user decision-making or prerequisite knowledge gaps.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI deployed an Adaptive Learning Engine that moves beyond simple regression to sequential state estimation:`,
      bulletPoints: [
        { icon: 'ChartBarIcon', text: "Bayesian State Modeling: Utilizing Bayesian networks to perform real-time inference on latent proficiency across complex Knowledge Maps." },
        { icon: 'ArrowTrendingUpIcon', text: "MDP Path Optimization: Utilizing Markov Decision Processes to determine the optimal sequential path for remediation and mastery based on live interactions." },
        { icon: 'ArrowPathIcon', text: "Concept Relationship Mapping: Dynamic identification of prerequisite failures, ensuring that reasoning is grounded in the structural logic of the domain." },
        { icon: 'RectangleGroupIcon', text: "Real-time Proficiency Visualization: An agentic interface providing high-fidelity visual dashboards of growth and systemic gaps." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Legacy Assessment", "Probabilistic Engine"],
      rows: [
        ["State Estimation", "Static Percentile", "Bayesian Inference"],
        ["Optimization Path", "Linear / Fixed", "MDP Optimized"],
        ["Gap Analysis", "Surface-level", "Prerequisite Logic Mapping"],
        ["Decision Logic", "Heuristic-based", "Probabilistic Reasoning"]
      ]
    }
  },

  // ─── ENTERPRISE SYSTEMS ────────────────────────────────────
  {
    slug: "scale-native-asset-backbone",
    title: "Scale-Native Multi-Tenant Asset Backbone",
    category: "Enterprise Systems",
    tags: ["Multi-Tenant CMS", "EdTech", "Scalable Architecture", "RBAC"],
    overview: `Jungroo AI engineered a vertically integrated Scale-Native Asset Backbone to unify heterogeneous digital assets across a massive application ecosystem. The system provides strict tenant isolation, handles 50,000 RPM peak loads, and enforces granular role-based access control across all asset lifecycle stages.`,
    challenge: {
      intro: `A massive digital ecosystem managing heterogeneous assets (video, interactive modules, assessments) faced a fragmentation crisis across its Student, Doubts, and Live Class applications. Operating across disparate B2B and B2C clusters, the organization lacked a **Single Source of Truth** for asset distribution. The legacy infrastructure struggled with **Tenant Isolation** and load balancing, leading to systemic risks during peak hours when traffic exceeded **10,000 Requests Per Second (RPS)**.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI engineered a vertically integrated Scale-Native Asset Backbone built on a resilient, cloud-native architecture:`,
      bulletPoints: [
        { icon: 'BuildingOfficeIcon', text: "Isolated Multi-Tenancy: A modular architecture ensuring strict data and asset isolation between institutional clusters while allowing centralized administrative control." },
        { icon: 'BoltIcon', text: "High-Concurrency Auto-Scaling: Deployment of a hardened infrastructure optimized for extreme loads, handling **50,000 RPM** with elastic scaling management." },
        { icon: 'LockClosedIcon', text: "Granular Role-Based Access (RBAC): A machine-enforced access layer that defines precise permissions across the asset lifecycle (Creator, Editor, Publisher) to ensure **100% data integrity**." },
        { icon: 'ShieldCheckIcon', text: "Secure Asset Rails: Hardened **AWS S3** integration featuring a custom permissions engine that serves context-aware assets based on specific institutional entitlements." },
        { icon: 'DocumentTextIcon', text: "High-Fidelity Traceability: Real-time logging of every approval stage and asset access request, providing 100% visibility into the distribution lifecycle." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Monolithic Environment", "Asset Backbone"],
      rows: [
        ["Peak Concurrency", "5k RPM (Bottlenecked)", "50,000 RPM (Validated)"],
        ["Tenant Isolation", "Logical / Shared Risk", "Physical & Permission Isolation"],
        ["Asset Delivery", "Variable / Unoptimized", "High-Throughput Rails"],
        ["Traceability", "Surface-level Logs", "Forensic-Grade Audit Paths"]
      ]
    }
  },
  {
    slug: "network-agnostic-assessment-engine",
    title: "Scale-Native Network-Agnostic Assessment Engine",
    category: "Enterprise Systems",
    tags: ["EdTech", "Online Assessment", "Low-Bandwidth", "Scalability"],
    overview: `Jungroo AI engineered a vertically integrated Network-Agnostic Execution Engine to move 100,000 students across rural school networks into a high-concurrency online assessment environment. The engine handles 100k RPM loads on weak 2G/3G signals through local-first execution, fault-tolerant session sync, and aggressive binary serialization.`,
    challenge: {
      intro: `During a rapid national digital transition, the objective was to move **100,000 students** across rural school networks into a high-concurrency online assessment environment. The system faced a massive **100k RPM** load hurdle while operating on weak, intermittent 2G/3G signals. The primary engineering goal was to eliminate the "Persistence Gap"—ensuring **Low Latency** and **Data Fidelity** for users even when the network was entirely unstable.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI engineered a vertically integrated Network-Agnostic Execution Engine designed for high-throughput edge performance:`,
      bulletPoints: [
        { icon: 'ArrowTrendingUpIcon', text: "Connectivity-Agnostic Architecture: Implementation of a **Local-First Execution** model where assessment logic and session states are managed on the client device to bypass server-side round-trip latency." },
        { icon: 'ServerStackIcon', text: "100k RPM Resilient Backbone: A hardened infrastructure designed to handle massive traffic spikes with **Sub-second Processing** times across 100,000+ simultaneous nodes." },
        { icon: 'ArrowPathIcon', text: "Fault-Tolerant Session Sync: Robust handlers that utilize **Deterministic Sync Protocols** to queue data packets locally, ensuring assessments resume instantly without data loss once connectivity is restored." },
        { icon: 'BoltIcon', text: "Low-Payload Delivery Rails: Aggressive **Binary Serialization** and progressive loading techniques to minimize data usage, enabling full functionality in extreme low-bandwidth areas." },
        { icon: 'ClockIcon', text: "Lean Resource Execution: Highly efficient deployment utilizing a specialized two-person engineering pod to achieve **Fast-TAT (Turnaround Time)** integration with existing mobile and web apps." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Legacy Environment", "Execution Engine"],
      rows: [
        ["Peak Concurrency", "Latency-Bound", "100,000+ Concurrent Nodes"],
        ["Throughput Capacity", "Variable", "100k RPM (Validated)"],
        ["Session Integrity", "High Dropout Rate", "100% Continuity"],
        ["Data Usage", "Resource-Intensive", "Network-Agnostic / Low-Bandwidth"]
      ]
    }
  },
  {
    slug: "api-first-transactional-engine",
    title: "API-First Transactional Orchestration Engine",
    category: "Enterprise Systems",
    tags: ["E-commerce", "API-First", "EdTech Platform", "Payment"],
    overview: `Jungroo AI engineered a vertically integrated API-First Transactional Engine for a leading EdTech platform. The engine provides unified purchase workflows, multi-modal payment reconciliation, event-driven entitlement synchronization, and forensic reporting—all through secure OAuth2 REST APIs.`,
    challenge: {
      intro: `The organization faced the complex task of defining and distributing **non-physical curricula** across its diverse application ecosystem (Student, Doubts, and Live Class apps). The primary engineering objective was to provide a unified purchase workflow that supported standalone subscriptions, trials, and tiered pricing while managing real-time access rights. The legacy environment struggled with **Multi-Modal Payment Reconciliation** (UPI, NEFT, installments) and lacked a cohesive entitlement synchronization layer.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI engineered a vertically integrated API-First Transactional Engine designed for elastic scaling and deep institutional integration:`,
      bulletPoints: [
        { icon: 'CubeIcon', text: "Digital Asset Bundling Logic: A dynamic collection engine where products are defined as logical asset pools (Videos, PDFs, Activities), allowing for rapid curriculum composition at the asset level." },
        { icon: 'LockClosedIcon', text: "OAuth2-Secured REST Rails: A hardened API layer that allows external apps and internal dashboards to query order metadata, package definitions, and entitlement status securely." },
        { icon: 'CurrencyDollarIcon', text: "Automated Payment Reconciliation: A specialized logic layer that handles partial payments, coupon validation, and automated reconciliation for both online and offline payment nodes." },
        { icon: 'BoltIcon', text: "Event-Driven Entitlement Sync: Real-time fulfillment rails that trigger immediate user access across all platforms upon payment confirmation." },
        { icon: 'ChartBarIcon', text: "Forensic Reporting Architecture: Integrated BI dashboards providing institutional visibility into sales performance, conversion metrics, and payment integrity." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Legacy Operations", "Orchestration Engine"],
      rows: [
        ["Order Effort", "Manual / Siloed", "80% Reduction in Overhead"],
        ["Fulfillment Speed", "Batch / Delayed", "Real-time / Instant Sync"],
        ["Payment Integrity", "Subjective Reconciliation", "Automated / Machine-Auditable"],
        ["System Interop", "Disconnected APIs", "Unified OAuth2 Backbone"]
      ]
    }
  },
  {
    slug: "dynamic-report-builder",
    title: "Dynamic Report Builder",
    category: "Enterprise Systems",
    tags: ["Custom Reporting", "Data Analytics", "SaaS Platform", "Multi-Tenant"],
    overview: `Jungroo AI engineered a vertically integrated Relational Discovery Engine for a leading SaaS platform for educational institutions in the U.S. The engine enables users to define and execute complex cross-table reports dynamically—without manual SQL or IT intervention—through intelligent relationship inference and optimized query generation.`,
    challenge: {
      intro: `A leading SaaS platform for educational institutions in the U.S. faced an **Institutional Latency** crisis. Stakeholders required complex, cross-table insights (bridging demographics, enrollments, and strategic metrics) but were bottlenecked by the need for manual IT intervention. The technical hurdle was **Relational Fragmentation**: enabling users to define and query multi-table relationships dynamically without compromising system performance or security.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI engineered a vertically integrated Relational Discovery Engine featuring a sophisticated data abstraction layer:`,
      bulletPoints: [
        { icon: 'ArrowPathIcon', text: "Intelligent Relationship Inference: A logic module that automatically identifies and manages joins between disparate data sources based on predefined **Semantic Hierarchies**." },
        { icon: 'RectangleGroupIcon', text: "Dynamic Projection Rails: A configurable interface allowing users to define projection attributes and complex multi-column filters that are converted into **Optimized SQL Executables** in real-time." },
        { icon: 'MagnifyingGlassIcon', text: "Global Parameter Injection: A specialized architecture that incorporates external contexts (e.g., Fiscal Year) into the base query selections and joins automatically." },
        { icon: 'DocumentTextIcon', text: "Configuration Persistence: A robust validation engine that persists complex query logic as **Reusable Report Blueprints**, enabling sub-second execution of recurring datasets." },
        { icon: 'ArrowsPointingOutIcon', text: "Multi-Tenant Scaling: A backend optimized for high-concurrency extraction, ensuring that massive datasets involving hundreds of joins remain performant." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Legacy Environment", "Report Builder"],
      rows: [
        ["Extraction TAT", "Weeks / IT-Dependent", "Zero-Latency Autonomy"],
        ["Query Complexity", "Linear / Table-Specific", "N-Dimensional Table Joins"],
        ["Data Utilization", "Fragmented & Siloed", "Unified Institutional Memory"],
        ["Operational Efficiency", "Manual SQL Crafting", "Machine-Enforced Logic"]
      ]
    }
  },

  // ─── CRM SYSTEMS / LEAD INTELLIGENCE ──────────────────────
  {
    slug: "full-funnel-admission-engine",
    title: "Full-Funnel Admission Orchestration Engine",
    category: "CRM Systems / Lead Intelligence",
    tags: ["CRM", "Lead Management", "EdTech", "Admissions"],
    overview: `Jungroo AI engineered a vertically integrated Admission Orchestration Engine to manage national-scale admission funnels across hundreds of partner schools. The platform features dual-channel identity verification, integrated academic assessments, bi-directional CRM sync, and high-performance landing pages achieving 95+ PageSpeed scores.`,
    challenge: {
      intro: `Managing a national-scale admission funnel across hundreds of partner schools created a **Conversion Gap**. Disparate tracking of student leads, manual entry latency, and inconsistent follow-up protocols led to high drop-off rates. The objective was to engineer a unified platform capable of verifying lead identities, evaluating academic readiness, and synchronizing data in real-time with enterprise CRMs while maintaining a **95+ PageSpeed** performance benchmark.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI engineered a vertically integrated Admission Orchestration Engine featuring:`,
      bulletPoints: [
        { icon: 'UserCircleIcon', text: "Multi-Tier Admin Hierarchy: Isolated administrative portals for super-admins and school-specific users to manage localized funnels with centralized oversight." },
        { icon: 'LockClosedIcon', text: "Dual-Channel Identity Verification: Secure lead capture utilizing **WhatsApp and SMS OTP** rails to eliminate fraudulent entries and ensure high-intent data." },
        { icon: 'AcademicCapIcon', text: "Integrated Assessment Module: A custom engine evaluating academic readiness with **Persistent Session Handling** and automated PDF report generation." },
        { icon: 'ArrowPathIcon', text: "Bi-Directional CRM Fabric: Real-time synchronization with **HubSpot** and **LeadSquared**, ensuring full-funnel visibility from social media lead forms to enrollment." },
        { icon: 'BoltIcon', text: "High-Performance Landing Rails: Optimized front-end architecture achieving **95+ PageSpeed** scores on mobile and desktop to maximize top-of-funnel efficiency." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Legacy Workflow", "Orchestration Engine"],
      rows: [
        ["Response Latency", "High / Manual Follow-up", "70% Reduction in TAT"],
        ["Conversion Rate", "Unoptimized Landing Pages", "40% Improvement in ROI"],
        ["Data Integrity", "Fragmented / Manual Entry", "Bi-Directional CRM Sync"],
        ["Verification", "Unverified / Risky Leads", "Dual-Channel OTP (Verified)"]
      ]
    }
  },

  // ─── LEGACY SYSTEMS ───────────────────────────────────────
  {
    slug: "legacy-modernization-rails",
    title: "High-Fidelity Legacy Modernization Rails",
    category: "Legacy Systems",
    tags: ["Data Migration", "ETL", "Platform Onboarding", "Legacy"],
    overview: `Jungroo AI engineered a vertically integrated Legacy Modernization Backbone to help educational institutions in the U.S. transition from antiquated DBF-based infrastructure to modern data management platforms. The system guarantees 100% data fidelity through heterogeneous format parsing, isolated concurrency rails, automated sanitization, and forensic migration logging.`,
    challenge: {
      intro: `Educational institutions in the U.S. faced a significant **Fidelity Gap** when transitioning from antiquated infrastructure (specifically legacy **DBF formats**) to modern data management platforms. The engineering hurdle was the secure, simultaneous migration of massive student records and high-concurrency binary files (images/assets) without data corruption or service degradation during onboarding.`,
      bulletPoints: []
    },
    solution: {
      intro: `Jungroo AI engineered a vertically integrated Legacy Modernization Backbone designed for 100% data fidelity:`,
      bulletPoints: [
        { icon: 'RectangleGroupIcon', text: "Heterogeneous Format Parsing: A specialized engine capable of ingesting antiquated **DBF** and binary structures, performing real-time transformation into a modern, consistent schema." },
        { icon: 'ArrowPathIcon', text: "Isolated Concurrency Rails: An orchestration model that ensures safe, isolated processing for multiple simultaneous institutional migrations, preventing cross-tenant conflicts." },
        { icon: 'ShieldCheckIcon', text: "Automated Sanitization Engine: Pre-integration validation that enforces strict business rules and error-handling protocols to identify anomalies before they reach the production database." },
        { icon: 'ArrowDownTrayIcon', text: "Secure Binary Extraction: A specialized pipeline that extracts and links digital assets from compressed archives directly to relational records, ensuring a complete 360-degree data view." },
        { icon: 'DocumentTextIcon', text: "Forensic Migration Logging: Comprehensive observability providing real-time updates and detailed logs for institutional stakeholders to monitor ingestion status and audit compliance." }
      ]
    },
    impactTable: {
      title: "Systemic Impact",
      headers: ["Metric", "Legacy Transition", "Modernization Rails"],
      rows: [
        ["Onboarding Latency", "Manual / Error-Prone", "Rapid / Automated"],
        ["Data Fidelity", "Partial / Fragmented", "100% Integrity Guaranteed"],
        ["Risk Posture", "High Data Loss Risk", "Forensic Error Handling"],
        ["Asset Integration", "Disconnected Records", "Deep Relational Asset Linking"]
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { caseStudies };
}
