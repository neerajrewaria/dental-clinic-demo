/**
 * ==========================================
 * DEMO ACCESS CONFIGURATION
 * ==========================================
 * 
 * To extend or update demo access:
 * 1. Update `expiryDate` below to your desired future date/time.
 *    Format: "YYYY-MM-DDTHH:mm:ss+05:30" (or any standard ISO date string)
 * 2. Run `npm run build` and redeploy.
 * 
 * To preview the expired screen immediately for testing:
 * Set `forceExpired: true`.
 */

export interface DemoAccessConfig {
  expiryDate: string;
  forceExpired: boolean;
  developerName: string;
  clinicName: string;
}

export const DEMO_CONFIG: DemoAccessConfig = {
  // Set the expiration timestamp for the demo website
  expiryDate: "2026-09-25T23:59:59+05:30",

  // Set to true to immediately test or preview the expired screen
  forceExpired: true,

  developerName: "Neeraj",
  clinicName: "Vrinda Dental Clinic Orthodontic and Implant Centre",
};

/**
 * Returns true if the demo period has elapsed or forceExpired is enabled.
 */
export const isDemoExpired = (): boolean => {
  if (DEMO_CONFIG.forceExpired) {
    return true;
  }
  
  if (!DEMO_CONFIG.expiryDate) {
    return false;
  }

  const expiryTime = new Date(DEMO_CONFIG.expiryDate).getTime();
  const currentTime = Date.now();

  return currentTime > expiryTime;
};
