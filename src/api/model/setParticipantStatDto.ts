/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Play.ID API
 * Esports API for Play.ID
 * OpenAPI spec version: 1.0
 */
import type { ParticipantDto } from './participantDto';
import type { SetParticipantStatDtoStatPayload } from './setParticipantStatDtoStatPayload';

export interface SetParticipantStatDto {
  /** 통계 ID */
  id: number;
  /** 참여자 정보 */
  participant: ParticipantDto;
  /** 통계 페이로드 */
  statPayload: SetParticipantStatDtoStatPayload;
}
