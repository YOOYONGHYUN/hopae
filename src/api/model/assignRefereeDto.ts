/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Play.ID API
 * Esports API for Play.ID
 * OpenAPI spec version: 1.0
 */

export interface AssignRefereeDto {
  /** Match ID */
  matchId: string;
  /** Referee ID */
  refereeId: string;
  /** Referee role (main, team_a, team_b, etc.) */
  role: string;
  /** Team name (for team referee) */
  teamName?: string;
}
