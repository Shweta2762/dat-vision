export const LIVEDATA_EXCLUDE_METER_MANUFACTURERS = ["EL Measure"];

export const sidebar_icons = {
    back_page: 'arrow_back',
    home_page: 'home',
    summary_dashboard: 'dashboard',
    live_dashboard: 'desktop_windows',
    alarms: 'alarm',
    analytics: 'analytics',
    trends: 'trending_up',
    analysis: 'signal_cellular_alt',
    reports: 'file_download',
    settings: 'settings',
    
    alarms_sub: 'alarm',
    analytics_sub: 'analytics',
    analysis_sub: 'signal_cellular_alt',
    settings_sub: 'settings',
    performance : 'bar_chart',
    person      : 'person',
    group       : 'group',
    recent_activity : 'library_books'
}

export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    isAdmin?: boolean;
    isSuperAdmin?: boolean;
    route?: string;
    children?: NavItem[];
}