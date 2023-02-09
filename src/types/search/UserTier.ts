interface UserTier {
  freshBlood: boolean;
  hotStreak: boolean;
  inactive: boolean;
  leagueId: string;
  leaguePoints: number;
  losses: number;
  queueType: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  tier: string;
  veteran: boolean;
  wins: number;
}

interface UserInfo {
  accountId?: string;
  id?: string;
  name?: string;
  profileIconId?: number;
  puuid?: string;
  revisionDate?: number;
  summonerLevel?: number;
}

interface TierInfo {
  leagueId?: string;
  queueType: string;
  tier: string;
  rank?: string;
  summonerId?: string;
  summonerName?: string;
  leaguePoints?: number;
  wins?: number;
  losses?: number;
  veteran?: boolean;
  inactive?: boolean;
  freshBlood?: boolean;
  hotStreak?: boolean;
}

export type { UserTier, UserInfo, TierInfo };
