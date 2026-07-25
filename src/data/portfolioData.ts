export interface Skill {
  name: string;
  category: 'Cloud & IaC' | 'Containers & Orchestration' | 'CI/CD & Automation' | 'Core & Scripting' | 'Monitoring & GitOps';
  icon: string;
  proficiency: number;
  description: string;
  tag: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  techStack: string[];
  impactMetrics: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  caseStudy: {
    overview: string;
    architecture: string[];
    challenges: string[];
    keyResults: string[];
    pipelineSteps: { title: string; desc: string }[];
  };
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  achievements: string[];
  location: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface RoadmapStep {
  id: number;
  name: string;
  category: string;
  description: string;
  keyConcepts: string[];
  status: 'Mastered' | 'In Practice';
}

export const PERSONAL_INFO = {
  name: "Rohit Bajiya",
  role: "DevOps Engineer",
  profileImage: "/src/assets/images/rohit_bajiya_new_photo_1784976478907.jpg",
  tagline: "Building Scalable Cloud Infrastructure & Automating Everything.",
  summary: [
    "DevOps Engineer Intern and Computer Science student specializing in cloud infrastructure automation using AWS, Terraform, Kubernetes, Jenkins, Docker, and Ansible.",
    "Passionate about Infrastructure as Code, Kubernetes orchestration, CI/CD automation, and Cloud Native technologies.",
    "Experienced in building highly available deployment pipelines, managing Kubernetes clusters, automating cloud infrastructure, and implementing DevSecOps best practices.",
    "Focused on writing scalable, secure, and production-ready cloud solutions."
  ],
  phone: "+91 7737698100",
  email: "rohitbajiya0756@gmail.com",
  location: "Didwana, Rajasthan, India",
  github: "https://github.com/Rohit-Bajiya",
  linkedin: "https://www.linkedin.com/in/rohit-bajiya-1449b6327/",
  stats: [
    { value: "1+", label: "Years Learning", detail: "Focused cloud & DevOps mastery" },
    { value: "10+", label: "Technologies", detail: "AWS, K8s, Docker, Terraform & more" },
    { value: "2+", label: "Major Projects", detail: "Production GitOps & CI/CD engines" },
    { value: "99%", label: "Deployment Reliability", detail: "Zero-downtime automated rollouts" }
  ],
  typingRoles: [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Terraform",
    "Kubernetes",
    "Docker"
  ]
};

export const SKILLS_DATA: Skill[] = [
  { name: "Linux", category: "Core & Scripting", icon: "Terminal", proficiency: 92, description: "RHEL, Ubuntu, systemctl, process management, security hardening", tag: "OS Kernel" },
  { name: "Shell Scripting", category: "Core & Scripting", icon: "Code2", proficiency: 88, description: "Bash automation, Cron jobs, system administration scripts", tag: "Automation" },
  { name: "Python", category: "Core & Scripting", icon: "FileCode", proficiency: 82, description: "Boto3 AWS SDK, DevOps scripting, automation utilities", tag: "SDK & Logic" },
  { name: "Git", category: "Core & Scripting", icon: "GitBranch", proficiency: 95, description: "Branching strategies, rebase, hooks, submodules", tag: "VCS" },
  { name: "GitHub", category: "Core & Scripting", icon: "Github", proficiency: 95, description: "GitHub Actions, PR checks, branch protection rules", tag: "Collaboration" },
  { name: "Docker", category: "Containers & Orchestration", icon: "Box", proficiency: 92, description: "Multi-stage builds, compose, container optimization & registries", tag: "Containerization" },
  { name: "Kubernetes", category: "Containers & Orchestration", icon: "Cpu", proficiency: 88, description: "EKS, Pods, Deployments, StatefulSets, Services, Ingress, HPA", tag: "Orchestration" },
  { name: "Terraform", category: "Cloud & IaC", icon: "Layers", proficiency: 85, description: "Modular IaC, state locking with S3/DynamoDB, AWS provider", tag: "IaC" },
  { name: "AWS", category: "Cloud & IaC", icon: "Cloud", proficiency: 88, description: "EC2, EKS, VPC, IAM, S3, RDS, CloudWatch, Route53", tag: "Cloud Provider" },
  { name: "Jenkins", category: "CI/CD & Automation", icon: "Workflow", proficiency: 86, description: "Pipeline-as-code, Groovy scripts, agent nodes, plugins", tag: "CI/CD Engine" },
  { name: "Ansible", category: "CI/CD & Automation", icon: "Server", proficiency: 84, description: "Playbooks, roles, inventory management, idempotency", tag: "Configuration" },
  { name: "Argo CD", category: "Monitoring & GitOps", icon: "GitPullRequest", proficiency: 80, description: "GitOps deployment controller, sync policies, rollouts", tag: "GitOps" },
  { name: "Prometheus", category: "Monitoring & GitOps", icon: "Activity", proficiency: 82, description: "Metrics collection, Alertmanager, PromQL rules", tag: "Metrics" },
  { name: "Grafana", category: "Monitoring & GitOps", icon: "BarChart3", proficiency: 85, description: "Cluster dashboards, real-time telemetry visualizers", tag: "Observability" },
  { name: "CI/CD", category: "CI/CD & Automation", icon: "RefreshCw", proficiency: 90, description: "End-to-end automated pipelines, test automation, artifacts", tag: "Pipeline Architecture" },
  { name: "Infrastructure as Code", category: "Cloud & IaC", icon: "Database", proficiency: 88, description: "Declarative cloud provisioning, drift detection", tag: "Architecture" }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "LinuxWorld Pvt Ltd",
    role: "DevOps Engineer Intern",
    location: "Jaipur, Rajasthan",
    period: "Internship",
    type: "Full-Time Internship",
    responsibilities: [
      "Implemented an end-to-end DevOps Automation pipeline for an e-commerce full-stack application.",
      "Managed Kubernetes Pods on AWS EKS clusters ensuring high availability and zero downtime.",
      "Maintained Docker private registries and optimized multi-stage container builds.",
      "Implemented Secrets Management and RBAC policies for production security.",
      "Worked on Jenkins automation pipelines to streamline integration and delivery.",
      "Created declarative infrastructure modules using Terraform on AWS Cloud."
    ],
    techStack: ["AWS EKS", "Jenkins", "Docker", "Terraform", "Kubernetes", "Ansible", "Linux", "Git"],
    impactMetrics: [
      { label: "Deployment Lead Time", value: "-70%" },
      { label: "Availability Target", value: "99.9%" },
      { label: "Automation Ratio", value: "100%" }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "progressive-delivery-pipeline",
    title: "Zero-Downtime Progressive Delivery Pipeline",
    subtitle: "Enterprise CI/CD Engine with Kubernetes Rolling Deployments",
    description: "Architected a complete CI/CD pipeline using Jenkins, GitHub, Docker, Kubernetes, and Ansible. Implemented rolling deployments with zero downtime, reducing deployment lead time by 70%.",
    image: "/src/assets/images/devops_pipeline_project_1784974452486.jpg",
    techStack: ["Jenkins", "Docker", "GitHub", "Ansible", "Kubernetes", "Linux"],
    githubUrl: "https://github.com/Rohit-Bajiya",
    liveDemoUrl: "https://github.com/Rohit-Bajiya",
    caseStudy: {
      overview: "Built a production-grade automated deployment engine for an e-commerce application. The goal was to eliminate manual deployment human errors and ensure 24/7 application uptime during updates.",
      architecture: [
        "GitHub webhooks trigger Jenkins multibranch pipeline upon git push",
        "Jenkins executes automated linting, security scanning, and unit tests",
        "Docker multi-stage builds generate lightweight, secure container images",
        "Ansible configures target Kubernetes cluster nodes and environment variables",
        "Kubernetes performs canary & rolling updates with Readiness/Liveness probes"
      ],
      challenges: [
        "Eliminating database migration race conditions during simultaneous pod rollouts",
        "Optimizing Docker image layer caching to reduce build time from 14 mins to 2 mins",
        "Securing database credentials in Jenkins using HashiCorp Vault integration"
      ],
      keyResults: [
        "Achieved 70% reduction in deployment lead time",
        "Zero downtime recorded across 50+ simulated production updates",
        "Automated rollback triggered in under 5 seconds if health checks fail"
      ],
      pipelineSteps: [
        { title: "1. Code Commit & Webhook", desc: "Git commit triggers automated Jenkins agent node build" },
        { title: "2. SAST & Docker Build", desc: "Static analysis and optimized Docker image creation" },
        { title: "3. Ansible Provisioning", desc: "Configures cluster secrets and secrets management" },
        { title: "4. K8s Rolling Rollout", desc: "Zero-downtime deployment with health checking probes" }
      ]
    }
  },
  {
    id: "enterprise-cloud-gitops",
    title: "Automated Enterprise Cloud Infrastructure & DevSecOps GitOps Engine",
    subtitle: "AWS EKS Cluster Provisioning via Modular Terraform & GitOps Workflow",
    description: "Provisioned scalable AWS infrastructure using Terraform. Configured high-availability EKS clusters, automated infrastructure provisioning, and implemented GitOps workflow with DevSecOps security checks.",
    image: "/src/assets/images/cloud_gitops_project_1784974471729.jpg",
    techStack: ["AWS", "Terraform", "EKS", "IAM", "VPC", "Ansible", "GitOps"],
    githubUrl: "https://github.com/Rohit-Bajiya",
    liveDemoUrl: "https://github.com/Rohit-Bajiya",
    caseStudy: {
      overview: "Designed an Infrastructure as Code (IaC) foundation on AWS using modular Terraform scripts. Enabled declarative cloud provisioning, isolated network topologies, and GitOps synchronization for EKS clusters.",
      architecture: [
        "Terraform provisions AWS VPC across multi-AZ with Public/Private subnets & NAT Gateways",
        "AWS EKS cluster with managed Node Groups configured for auto-scaling (Karpenter/HPA)",
        "Fine-grained IAM Roles for Service Accounts (IRSA) enforcing least-privilege security",
        "Argo CD synchronization engine observing cluster state against Git repositories"
      ],
      challenges: [
        "Managing Terraform remote state lock safely in S3 with DynamoDB state locking",
        "Restricting EKS API endpoint accessibility to VPN bastion host",
        "Configuring IAM policies automatically via Terraform dynamic blocks"
      ],
      keyResults: [
        "100% Infrastructure reproducible in under 12 minutes",
        "Zero manual clicks in AWS Web Console (Full IaC discipline)",
        "DevSecOps compliance scanning integrated into Terraform plan workflows"
      ],
      pipelineSteps: [
        { title: "1. Terraform Spec", desc: "Modular HCL code defining VPC, EKS, Subnets & IAM" },
        { title: "2. Security Scan", desc: "Tfsec & Checkov security analysis before plan execution" },
        { title: "3. Remote State Lock", desc: "Atomic deployment state persisted in S3 and DynamoDB" },
        { title: "4. GitOps Sync", desc: "Argo CD continuous reconciliation against cluster state" }
      ]
    }
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Jodhpur Institute of Engineering & Technology",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    period: "Pursuing",
    location: "Jodhpur, Rajasthan, India",
    achievements: [
      "Represented University in Technical Fest & Hackathons",
      "Ranked in Top 5% in Academics across Computer Science Department",
      "Lead active discussions on Cloud Native technologies & DevOps workshops"
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "National Level Sports Representation",
    category: "Athletics & Team Sports",
    description: "Represented the university in national-level sports competitions, demonstrating discipline, high endurance under pressure, and commitment.",
    iconName: "Trophy",
    highlight: "National Competitor"
  },
  {
    title: "Strategic Team Communication & Coordination",
    category: "Leadership",
    description: "Improved team communication resulting in a 20% increase in coordinated plays and strategic execution during competitive events.",
    iconName: "Users",
    highlight: "+20% Coordination Efficiency"
  },
  {
    title: "Club Management & Athlete Relations",
    category: "Management",
    description: "Managed seamless communication between university sports club management and more than 50 student athletes.",
    iconName: "Award",
    highlight: "50+ Athletes Managed"
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  { id: 1, name: "Linux", category: "System Core", description: "Kernel concepts, bash commands, file permissions, systemd services, SSH & networking fundamentals.", keyConcepts: ["Process Management", "File Permissions", "Systemd Services", "Networking"], status: "Mastered" },
  { id: 2, name: "Git", category: "Version Control", description: "Branching strategies, rebase, merge conflicts, Git hooks, submodules, pull request code reviews.", keyConcepts: ["Git Flow", "Rebase", "Hooks", "Release Tagging"], status: "Mastered" },
  { id: 3, name: "Docker", category: "Containerization", description: "Multi-stage Dockerfiles, image optimization, networking, storage volumes, Docker Compose.", keyConcepts: ["Multi-Stage Builds", "Layer Caching", "Container Security", "Compose"], status: "Mastered" },
  { id: 4, name: "Kubernetes", category: "Orchestration", description: "Pods, Deployments, Services, Ingress Controllers, ConfigMaps, Secrets, Persistent Volumes & HPA.", keyConcepts: ["EKS Clusters", "RBAC & Secrets", "Rolling Updates", "HPA"], status: "Mastered" },
  { id: 5, name: "Jenkins", category: "CI/CD Automation", description: "Declarative & Scripted Pipelines, agent nodes, plugins, multibranch workflow, webhook triggers.", keyConcepts: ["Jenkinsfile", "Agent Nodes", "Plugin Mgmt", "Vault Sync"], status: "Mastered" },
  { id: 6, name: "AWS", category: "Cloud Provider", description: "EC2, VPC, EKS, IAM, S3, RDS, Route53, Security Groups, IAM IRSA policy management.", keyConcepts: ["VPC Multi-AZ", "EKS Managed Nodes", "IAM Roles", "S3 Storage"], status: "Mastered" },
  { id: 7, name: "Terraform", category: "Infrastructure as Code", description: "Modular HCL, remote S3 backends, state locking with DynamoDB, resource dependencies, providers.", keyConcepts: ["Modules", "State Locking", "Drift Control", "HCL Specs"], status: "Mastered" },
  { id: 8, name: "Ansible", category: "Configuration Mgmt", description: "Playbooks, inventory configuration, roles, handlers, Vault secrets, idempotent state automation.", keyConcepts: ["Playbooks", "Roles", "Idempotency", "Ansible Vault"], status: "Mastered" },
  { id: 9, name: "Argo CD", category: "GitOps", description: "Declarative continuous delivery, cluster synchronization, automated drift remediation, rollouts.", keyConcepts: ["Declarative Sync", "Git as Source", "Drift Correction", "Rollouts"], status: "Mastered" },
  { id: 10, name: "Monitoring", category: "Observability", description: "Prometheus metric scraping, Alertmanager rules, Grafana real-time dashboarding & telemetry.", keyConcepts: ["PromQL Queries", "Grafana Panels", "Alertmanager", "Node Exporter"], status: "Mastered" },
  { id: 11, name: "Production", category: "DevSecOps & Reliability", description: "High availability, zero-downtime deployment, automated security checks, incident recovery.", keyConcepts: ["Zero Downtime", "High Availability", "DevSecOps Security", "Disaster Recovery"], status: "Mastered" }
];
