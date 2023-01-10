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

interface UserTierInfo {
  UsertierInfo: UserTier[];
}

export type { UserTier, UserTierInfo };
