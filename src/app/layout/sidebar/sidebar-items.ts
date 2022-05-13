import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "MENUITEMS.MAIN.TEXT",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },

  // Admin Modules
  {
    path: "",
    title: "MENUITEMS.DASHBOARD.TEXT",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/dashboard/main",
        title: "MENUITEMS.DASHBOARD.LIST.DASHBOARD1",
        moduleName: "dashboard",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      }
    ],
  },

  
  // Doctor Modules
  {
    path: "/doctor/dashboard",
    title: "MENUITEMS.DASHBOARD.LIST.DOCTOR-DASHBOARD",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Doctor"],
    submenu: [],
  },

  // Patient Modules
  {
    path: "/patient/dashboard",
    title: "MENUITEMS.DASHBOARD.LIST.PATIENT-DASHBOARD",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "space_dashboard",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Patient"],
    submenu: [],
  },
  // Receptionniste Modules

  
  {
    path: "",
    title: "Patient",
    moduleName: "patient",
    iconType: "material-icons-two-tone",
    icon: "description",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/receptionniste/patient/add-patient",
        title: "add patient",
        moduleName: "patient",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/receptionniste/patient/all-patients",
        title: "all patients",
        moduleName: "patient",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      
    ],
  },
  {
    path: "",
    title: "Fiche prestation",
    moduleName: "fiche-prestation",
    iconType: "material-icons-two-tone",
    icon: "description",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/receptionniste/fiche-prestation/add-fiche",
        title: "ajouter un fiche",
        moduleName: "fiche-prestation",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/receptionniste/fiche-prestation/all-fiches",
        title: "liste des fiches",
        moduleName: "fiche-prestation",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      
    ],
  },
  {
    path: "",
    title: "Render-vous",
    moduleName: "rendez-vous",
    iconType: "material-icons-two-tone",
    icon: "description",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/receptionniste/rendez-vous/add-rdv",
        title: "add rendez-vous",
        moduleName: "rendez-vous",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/receptionniste/rendez-vous/all-rdvs",
        title: "liste rendez-vous",
        moduleName: "rendez-vous",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      
    ],
  },
];