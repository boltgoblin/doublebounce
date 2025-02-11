const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Particles,
		C3.Behaviors.Sin,
		C3.Behaviors.Bullet,
		C3.Behaviors.Physics,
		C3.Behaviors.MoveTo,
		C3.Behaviors.Timer,
		C3.Plugins.TiledBg,
		C3.Plugins.NinePatch,
		C3.Behaviors.solid,
		C3.Behaviors.Fade,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Orbit,
		C3.Behaviors.Rotate,
		C3.Plugins.Keyboard,
		C3.Plugins.Browser,
		C3.Plugins.AJAX,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Plugins.TextBox,
		C3.Plugins.HTMLElement,
		C3.Behaviors.wrap,
		C3.Plugins.Arr,
		C3.Plugins.LocalStorage,
		C3.Plugins.Touch,
		C3.Plugins.Json,
		C3.Plugins.MetaproPlugin,
		C3.Behaviors.destroy,
		C3.Behaviors.Tween,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.MetaproPlugin.Acts.RequestBestScoresLeaderboardByMapId,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.MetaproPlugin.Cnds.OnBestScoresLeaderboardReceived,
		C3.Plugins.Json.Acts.SetJSON,
		C3.Plugins.MetaproPlugin.Exps.GetBestScoresLeaderboard,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Json.Cnds.ForEach,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Json.Exps.Get,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Json.Cnds.HasKey,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.MetaproPlugin.Acts.SendCrypto,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.MetaproPlugin.Cnds.OnTransactionSent,
		C3.Plugins.MetaproPlugin.Acts.AddScore,
		C3.Plugins.MetaproPlugin.Cnds.OnError,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.MetaproPlugin.Exps.GetLastError,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.MetaproPlugin.Acts.RequestAccount,
		C3.Plugins.MetaproPlugin.Cnds.OnAccountReceived,
		C3.Plugins.MetaproPlugin.Acts.CheckIfRegistered,
		C3.Plugins.MetaproPlugin.Cnds.OnIsRegistered,
		C3.Plugins.MetaproPlugin.Cnds.OnIsNotRegistered,
		C3.Plugins.MetaproPlugin.Acts.Login,
		C3.Plugins.MetaproPlugin.Cnds.OnUserLoggedIn,
		C3.Plugins.MetaproPlugin.Exps.GetUsername,
		C3.Plugins.MetaproPlugin.Exps.GetAccount,
		C3.Plugins.MetaproPlugin.Acts.RequestBestScore,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.MetaproPlugin.Exps.GetBestScore,
		C3.Plugins.MetaproPlugin.Acts.RequestUserScore,
		C3.Plugins.MetaproPlugin.Exps.GetTotalScore,
		C3.Plugins.MetaproPlugin.Acts.RequestNumberOfRuns,
		C3.Plugins.MetaproPlugin.Exps.GetNumberOfRuns,
		C3.Plugins.MetaproPlugin.Acts.FetchReferralCode,
		C3.Plugins.MetaproPlugin.Exps.GetAvatar,
		C3.Plugins.MetaproPlugin.Cnds.OnReferralCodeEmpty,
		C3.Plugins.MetaproPlugin.Acts.GenerateReferralCode,
		C3.Plugins.MetaproPlugin.Exps.GetReferralCode,
		C3.Plugins.MetaproPlugin.Cnds.OnReferralCodeExists,
		C3.Plugins.MetaproPlugin.Exps.GetDynamicReward,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.MetaproPlugin.Acts.SendContractTransaction,
		C3.ScriptsInEvents.Emenupadselection_Event28_Act1,
		C3.Plugins.MetaproPlugin.Acts.UpdateScore,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.MetaproPlugin.Acts.SetTransactionStatus,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.MetaproPlugin.Exps.GetTransactionStatus,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.MetaproPlugin.Acts.CheckReferralCodeFromDeeplink,
		C3.Plugins.MetaproPlugin.Cnds.OnRefCodeFromDeeplinkExists,
		C3.Plugins.MetaproPlugin.Exps.GetRefCodeFromDeeplink,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.TextBox.Cnds.OnTextChanged,
		C3.Plugins.TextBox.Exps.Text,
		C3.Plugins.HTMLElement.Acts.SetContent,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.MetaproPlugin.Acts.UpdateUsername,
		C3.ScriptsInEvents.Egameplay_Event2_Act8,
		C3.Behaviors.MoveTo.Acts.SetMaxSpeed,
		C3.Behaviors.MoveTo.Acts.SetAcceleration,
		C3.Behaviors.MoveTo.Acts.SetDeceleration,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Behaviors.Physics.Acts.SetWorldGravity,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.ScriptsInEvents.Egameplay_Event7_Act1,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.NinePatch.Acts.SetVisible,
		C3.Behaviors.Physics.Acts.SetEnabled,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.System.Acts.CreateObjectByName,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgba255,
		C3.Plugins.NinePatch.Acts.SetDefaultColor,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.System.Exps.fps,
		C3.Plugins.Text.Acts.AppendText,
		C3.Plugins.System.Exps.objectcount,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Acts.SetObjectTimescale,
		C3.Plugins.Sprite.Cnds.PickParent,
		C3.Behaviors.Orbit.Acts.Pin,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Behaviors.DragnDrop.Acts.Drop,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Text.Cnds.OnCreated,
		C3.Plugins.System.Exps.projectversion,
		C3.Plugins.NinePatch.Cnds.IsVisible,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.MetaproPlugin.Acts.ReadContract,
		C3.Plugins.MetaproPlugin.Cnds.OnReadContractDataReceived,
		C3.Plugins.MetaproPlugin.Exps.GetLastReadContractData,
		C3.Plugins.Arr.Acts.SetXY,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Json.Exps.CurrentKey,
		C3.Plugins.Json.Exps.CurrentValue,
		C3.Plugins.MetaproPlugin.Acts.MultipleReadContract,
		C3.Plugins.MetaproPlugin.Cnds.OnMultipleReadContractDataReceived,
		C3.Plugins.MetaproPlugin.Exps.GetLastMultipleReadContractData,
		C3.Plugins.Arr.Cnds.ArrForEach,
		C3.Plugins.Arr.Exps.CurX,
		C3.Plugins.Arr.Exps.CurY,
		C3.Plugins.Arr.Exps.CurValue
	];
};
self.C3_JsPropNameTable = [
	{BallDeath: 0},
	{BallDeathParticles: 0},
	{BrickHexDeath: 0},
	{DestroyAreaParticles: 0},
	{BallTrailEffect: 0},
	{Sine: 0},
	{BrickHexBlick: 0},
	{BallPusherParticles: 0},
	{ReadyForTeleportation: 0},
	{Bullet: 0},
	{Physics: 0},
	{MoveTo: 0},
	{Timer: 0},
	{Ball: 0},
	{BrickHex: 0},
	{BaseAngle: 0},
	{AngleMultiplier: 0},
	{Pad: 0},
	{DestroyArea: 0},
	{DestroyAreaBg: 0},
	{Solid: 0},
	{DoorNext: 0},
	{Rock: 0},
	{Fade: 0},
	{StartArea: 0},
	{DoorGrey: 0},
	{BallPusher: 0},
	{PosX: 0},
	{PosY: 0},
	{DragDrop: 0},
	{WallDragH: 0},
	{WallDragHArea: 0},
	{WallAutoMoveH: 0},
	{Sine2: 0},
	{WallAutoMoveDiagonal: 0},
	{Orbit: 0},
	{WallCircleMove: 0},
	{Fireball: 0},
	{TapBonus1: 0},
	{Rotate: 0},
	{WallRotating: 0},
	{Taplosion: 0},
	{Teleporter1: 0},
	{Teleporter2: 0},
	{MenuBGHex: 0},
	{RotatingParent: 0},
	{TouchMoveArea: 0},
	{SpawnArea: 0},
	{Keyboard: 0},
	{SafeArea: 0},
	{Browser: 0},
	{AJAX: 0},
	{Audio: 0},
	{Area0: 0},
	{Area1: 0},
	{Area2: 0},
	{Area3: 0},
	{Area4: 0},
	{Area5: 0},
	{Area6: 0},
	{Area7: 0},
	{Area8: 0},
	{Area9: 0},
	{Area10: 0},
	{Area11: 0},
	{Area12: 0},
	{Area13: 0},
	{Area14: 0},
	{Area15: 0},
	{StartArea0: 0},
	{StartArea1: 0},
	{StartArea2: 0},
	{StartArea3: 0},
	{StartArea4: 0},
	{StartArea5: 0},
	{StartArea6: 0},
	{Area16: 0},
	{Area17: 0},
	{Area18: 0},
	{Area19: 0},
	{Area20: 0},
	{Area21: 0},
	{Area22: 0},
	{Area23: 0},
	{Area24: 0},
	{Area25: 0},
	{Area26: 0},
	{Area27: 0},
	{Area28: 0},
	{Area29: 0},
	{Area30: 0},
	{Area31: 0},
	{Area32: 0},
	{Area33: 0},
	{Area34: 0},
	{Area35: 0},
	{Area36: 0},
	{Area37: 0},
	{Area38: 0},
	{Area39: 0},
	{Area40: 0},
	{Area41: 0},
	{Area42: 0},
	{Area43: 0},
	{Area44: 0},
	{Area45: 0},
	{Area46: 0},
	{Area47: 0},
	{Area48: 0},
	{Area49: 0},
	{Area50: 0},
	{Area51: 0},
	{Area52: 0},
	{SolidBlock: 0},
	{Wall: 0},
	{HUD_Finger: 0},
	{HUDText: 0},
	{DebugText: 0},
	{BlocksText: 0},
	{CurrentLevelText: 0},
	{PointsTexts: 0},
	{FloatingPoints: 0},
	{PressScale: 0},
	{PressDuration: 0},
	{SoundPress: 0},
	{PauseButton: 0},
	{CoinsText: 0},
	{TotalCoinsText: 0},
	{BestLevelText: 0},
	{BestScoreText: 0},
	{HUDBoosterLabelText: 0},
	{CurrentBoosterNumberText: 0},
	{ResumeButton: 0},
	{QuitButton: 0},
	{MusicButton: 0},
	{SoundsButton: 0},
	{GamePausedHeader: 0},
	{OKButton: 0},
	{SummaryHeader: 0},
	{CreateAccountButton: 0},
	{LoginButton: 0},
	{TermsCheckbox: 0},
	{MenuButtonText: 0},
	{MenuHeaderText: 0},
	{MenuSmallText: 0},
	{MenuText: 0},
	{TermsText: 0},
	{ErrorText: 0},
	{ButtonText: 0},
	{PadNameText: 0},
	{AvailableText: 0},
	{PadParam2Text: 0},
	{PadParam1Text: 0},
	{PadParam3Text: 0},
	{PadCostText: 0},
	{LeaderboardEntryText: 0},
	{LeaderboardEntryPointsText: 0},
	{LeaderboardEntryText2: 0},
	{LeaderboardEntryPointsText2: 0},
	{UserNameText: 0},
	{GameplaysText: 0},
	{BoosterCostText: 0},
	{LeaderboardEntryPointsHeader: 0},
	{LeaderboardEntryHeader: 0},
	{WaitErrorText: 0},
	{PaddleDebugText: 0},
	{GameLogo: 0},
	{CoinsIcon: 0},
	{StartButton: 0},
	{LeaderboardButton: 0},
	{ProfileButton: 0},
	{GameVersionText: 0},
	{LoadingText: 0},
	{BackButton: 0},
	{HudPointsIcon: 0},
	{LoadingIndicator: 0},
	{ChangePadButton: 0},
	{BuyBoosterButton: 0},
	{NextPadButton: 0},
	{PrevPadButton: 0},
	{SelectPadButton: 0},
	{BuyPadButton: 0},
	{PadParameter1Icon: 0},
	{PadParameter2Icon: 0},
	{PadParameter3Icon: 0},
	{BombIcon: 0},
	{ReferralCodeTextInput: 0},
	{DottedLine: 0},
	{MenuSelectedPad: 0},
	{EditNameButton: 0},
	{LevelIcon: 0},
	{ChangeNameBackButton: 0},
	{ChangeNameButton: 0},
	{GameplaysIcon: 0},
	{Buy100CoinsButton: 0},
	{Buy500CoinsButton: 0},
	{Buy1000CoinsButton: 0},
	{Buy5000CoinsButton: 0},
	{ShopButton: 0},
	{LeaderboardPointsStart: 0},
	{LeaderboardPointsStart2: 0},
	{LeaderboardStart: 0},
	{LeaderboardStart2: 0},
	{MenuFadeEffect: 0},
	{NameInput: 0},
	{Sprite: 0},
	{Avatar_Profile_Main: 0},
	{MoveDistance: 0},
	{Wrap: 0},
	{StarBgLayer1: 0},
	{StarBgLayer2: 0},
	{StarBgLayer3: 0},
	{TiledBackground: 0},
	{MenuBgStar: 0},
	{PadParams: 0},
	{Items_Unlocked: 0},
	{LocalStorage: 0},
	{Items_Available: 0},
	{Items_MaxMint: 0},
	{Touch: 0},
	{JSON: 0},
	{metaproPlugin: 0},
	{KillAfterAnimation: 0},
	{DestroyOutsideLayout: 0},
	{Areas: 0},
	{BgStars: 0},
	{Tween: 0},
	{MenuButtons: 0},
	{MenuButtonsBig: 0},
	{GameSounds: 0},
	{GameMusic: 0},
	{MusicVolume: 0},
	{MusicID: 0},
	{SoundName: 0},
	{BestScore: 0},
	{BestLevel: 0},
	{TotalCoins: 0},
	{BoosterActive: 0},
	{BoosterCount: 0},
	{SelectedPad: 0},
	{referralSettingsId: 0},
	{userName: 0},
	{userAccount: 0},
	{numberOfRuns: 0},
	{userAvatarImg: 0},
	{userRefCode: 0},
	{referralCode: 0},
	{ContractAddress_Token: 0},
	{ContractAddress_NFT: 0},
	{ReceiverAddress: 0},
	{ReceiverAddress2: 0},
	{ChainID: 0},
	{NFT_ABI: 0},
	{BATCH_OF_ABI: 0},
	{MULTICALL_ABI: 0},
	{RPC_URL: 0},
	{lineDelta: 0},
	{lineY: 0},
	{leaderboardLimit: 0},
	{CoinsToGet: 0},
	{ReturnToLayout: 0},
	{TokenAmount: 0},
	{PadSelectionCurrent: 0},
	{amount: 0},
	{ProcessedItemName: 0},
	{TokenID: 0},
	{ItemName: 0},
	{MintedItemName: 0},
	{rulesChecked: 0},
	{CurrentLevel: 0},
	{PointsMultiplier: 0},
	{CurrentPoints: 0},
	{BallSpeedBase: 0},
	{BallSpeedPerLevel: 0},
	{ColorIndex: 0},
	{BricksToDestroy: 0},
	{GamePaused: 0},
	{Index: 0},
	{IndexMax: 0},
	{StartIndexMax: 0},
	{RandomBrickSound: 0},
	{CurrentCoins: 0},
	{AssetIdToSend: 0},
	{ItemsCount: 0}
];

self.InstanceType = {
	BallDeath: class extends self.ISpriteInstance {},
	BallDeathParticles: class extends self.IParticlesInstance {},
	BrickHexDeath: class extends self.ISpriteInstance {},
	DestroyAreaParticles: class extends self.IParticlesInstance {},
	BallTrailEffect: class extends self.IParticlesInstance {},
	BrickHexBlick: class extends self.ISpriteInstance {},
	BallPusherParticles: class extends self.IParticlesInstance {},
	Ball: class extends self.ISpriteInstance {},
	BrickHex: class extends self.ISpriteInstance {},
	Pad: class extends self.ISpriteInstance {},
	DestroyArea: class extends self.ITiledBackgroundInstance {},
	DestroyAreaBg: class extends self.ITiledBackgroundInstance {},
	DoorNext: class extends self.IWorldInstance {},
	Rock: class extends self.ISpriteInstance {},
	StartArea: class extends self.ISpriteInstance {},
	DoorGrey: class extends self.IWorldInstance {},
	BallPusher: class extends self.ISpriteInstance {},
	WallDragH: class extends self.ISpriteInstance {},
	WallDragHArea: class extends self.ISpriteInstance {},
	WallAutoMoveH: class extends self.ISpriteInstance {},
	WallAutoMoveDiagonal: class extends self.ISpriteInstance {},
	WallCircleMove: class extends self.ISpriteInstance {},
	Fireball: class extends self.ISpriteInstance {},
	TapBonus1: class extends self.ISpriteInstance {},
	WallRotating: class extends self.ISpriteInstance {},
	Taplosion: class extends self.ISpriteInstance {},
	Teleporter1: class extends self.ISpriteInstance {},
	Teleporter2: class extends self.ISpriteInstance {},
	MenuBGHex: class extends self.ISpriteInstance {},
	RotatingParent: class extends self.ISpriteInstance {},
	TouchMoveArea: class extends self.IWorldInstance {},
	SpawnArea: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	SafeArea: class extends self.ITiledBackgroundInstance {},
	Browser: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Area0: class extends self.ISpriteInstance {},
	Area1: class extends self.ISpriteInstance {},
	Area2: class extends self.ISpriteInstance {},
	Area3: class extends self.ISpriteInstance {},
	Area4: class extends self.ISpriteInstance {},
	Area5: class extends self.ISpriteInstance {},
	Area6: class extends self.ISpriteInstance {},
	Area7: class extends self.ISpriteInstance {},
	Area8: class extends self.ISpriteInstance {},
	Area9: class extends self.ISpriteInstance {},
	Area10: class extends self.ISpriteInstance {},
	Area11: class extends self.ISpriteInstance {},
	Area12: class extends self.ISpriteInstance {},
	Area13: class extends self.ISpriteInstance {},
	Area14: class extends self.ISpriteInstance {},
	Area15: class extends self.ISpriteInstance {},
	StartArea0: class extends self.ISpriteInstance {},
	StartArea1: class extends self.ISpriteInstance {},
	StartArea2: class extends self.ISpriteInstance {},
	StartArea3: class extends self.ISpriteInstance {},
	StartArea4: class extends self.ISpriteInstance {},
	StartArea5: class extends self.ISpriteInstance {},
	StartArea6: class extends self.ISpriteInstance {},
	Area16: class extends self.ISpriteInstance {},
	Area17: class extends self.ISpriteInstance {},
	Area18: class extends self.ISpriteInstance {},
	Area19: class extends self.ISpriteInstance {},
	Area20: class extends self.ISpriteInstance {},
	Area21: class extends self.ISpriteInstance {},
	Area22: class extends self.ISpriteInstance {},
	Area23: class extends self.ISpriteInstance {},
	Area24: class extends self.ISpriteInstance {},
	Area25: class extends self.ISpriteInstance {},
	Area26: class extends self.ISpriteInstance {},
	Area27: class extends self.ISpriteInstance {},
	Area28: class extends self.ISpriteInstance {},
	Area29: class extends self.ISpriteInstance {},
	Area30: class extends self.ISpriteInstance {},
	Area31: class extends self.ISpriteInstance {},
	Area32: class extends self.ISpriteInstance {},
	Area33: class extends self.ISpriteInstance {},
	Area34: class extends self.ISpriteInstance {},
	Area35: class extends self.ISpriteInstance {},
	Area36: class extends self.ISpriteInstance {},
	Area37: class extends self.ISpriteInstance {},
	Area38: class extends self.ISpriteInstance {},
	Area39: class extends self.ISpriteInstance {},
	Area40: class extends self.ISpriteInstance {},
	Area41: class extends self.ISpriteInstance {},
	Area42: class extends self.ISpriteInstance {},
	Area43: class extends self.ISpriteInstance {},
	Area44: class extends self.ISpriteInstance {},
	Area45: class extends self.ISpriteInstance {},
	Area46: class extends self.ISpriteInstance {},
	Area47: class extends self.ISpriteInstance {},
	Area48: class extends self.ISpriteInstance {},
	Area49: class extends self.ISpriteInstance {},
	Area50: class extends self.ISpriteInstance {},
	Area51: class extends self.ISpriteInstance {},
	Area52: class extends self.ISpriteInstance {},
	SolidBlock: class extends self.IWorldInstance {},
	Wall: class extends self.ISpriteInstance {},
	HUD_Finger: class extends self.ISpriteInstance {},
	HUDText: class extends self.ITextInstance {},
	DebugText: class extends self.ITextInstance {},
	BlocksText: class extends self.ITextInstance {},
	CurrentLevelText: class extends self.ITextInstance {},
	PointsTexts: class extends self.ITextInstance {},
	FloatingPoints: class extends self.ITextInstance {},
	PauseButton: class extends self.ISpriteInstance {},
	CoinsText: class extends self.ITextInstance {},
	TotalCoinsText: class extends self.ITextInstance {},
	BestLevelText: class extends self.ITextInstance {},
	BestScoreText: class extends self.ITextInstance {},
	HUDBoosterLabelText: class extends self.ITextInstance {},
	CurrentBoosterNumberText: class extends self.ITextInstance {},
	ResumeButton: class extends self.ISpriteInstance {},
	QuitButton: class extends self.ISpriteInstance {},
	MusicButton: class extends self.ISpriteInstance {},
	SoundsButton: class extends self.ISpriteInstance {},
	GamePausedHeader: class extends self.ISpriteInstance {},
	OKButton: class extends self.ISpriteInstance {},
	SummaryHeader: class extends self.ISpriteInstance {},
	CreateAccountButton: class extends self.IWorldInstance {},
	LoginButton: class extends self.IWorldInstance {},
	TermsCheckbox: class extends self.ISpriteInstance {},
	MenuButtonText: class extends self.ITextInstance {},
	MenuHeaderText: class extends self.ITextInstance {},
	MenuSmallText: class extends self.ITextInstance {},
	MenuText: class extends self.ITextInstance {},
	TermsText: class extends self.ITextInstance {},
	ErrorText: class extends self.ITextInstance {},
	ButtonText: class extends self.ITextInstance {},
	PadNameText: class extends self.ITextInstance {},
	AvailableText: class extends self.ITextInstance {},
	PadParam2Text: class extends self.ITextInstance {},
	PadParam1Text: class extends self.ITextInstance {},
	PadParam3Text: class extends self.ITextInstance {},
	PadCostText: class extends self.ITextInstance {},
	LeaderboardEntryText: class extends self.ITextInstance {},
	LeaderboardEntryPointsText: class extends self.ITextInstance {},
	LeaderboardEntryText2: class extends self.ITextInstance {},
	LeaderboardEntryPointsText2: class extends self.ITextInstance {},
	UserNameText: class extends self.ITextInstance {},
	GameplaysText: class extends self.ITextInstance {},
	BoosterCostText: class extends self.ITextInstance {},
	LeaderboardEntryPointsHeader: class extends self.ITextInstance {},
	LeaderboardEntryHeader: class extends self.ITextInstance {},
	WaitErrorText: class extends self.ITextInstance {},
	PaddleDebugText: class extends self.ITextInstance {},
	GameLogo: class extends self.ISpriteInstance {},
	CoinsIcon: class extends self.ISpriteInstance {},
	StartButton: class extends self.ISpriteInstance {},
	LeaderboardButton: class extends self.ISpriteInstance {},
	ProfileButton: class extends self.ISpriteInstance {},
	GameVersionText: class extends self.ITextInstance {},
	LoadingText: class extends self.ITextInstance {},
	BackButton: class extends self.ISpriteInstance {},
	HudPointsIcon: class extends self.ISpriteInstance {},
	LoadingIndicator: class extends self.ISpriteInstance {},
	ChangePadButton: class extends self.ISpriteInstance {},
	BuyBoosterButton: class extends self.ISpriteInstance {},
	NextPadButton: class extends self.ISpriteInstance {},
	PrevPadButton: class extends self.ISpriteInstance {},
	SelectPadButton: class extends self.IWorldInstance {},
	BuyPadButton: class extends self.IWorldInstance {},
	PadParameter1Icon: class extends self.ISpriteInstance {},
	PadParameter2Icon: class extends self.ISpriteInstance {},
	PadParameter3Icon: class extends self.ISpriteInstance {},
	BombIcon: class extends self.ISpriteInstance {},
	ReferralCodeTextInput: class extends self.ITextInputInstance {},
	DottedLine: class extends self.ISpriteInstance {},
	MenuSelectedPad: class extends self.ISpriteInstance {},
	EditNameButton: class extends self.ISpriteInstance {},
	LevelIcon: class extends self.ISpriteInstance {},
	ChangeNameBackButton: class extends self.ISpriteInstance {},
	ChangeNameButton: class extends self.ISpriteInstance {},
	GameplaysIcon: class extends self.ISpriteInstance {},
	Buy100CoinsButton: class extends self.ISpriteInstance {},
	Buy500CoinsButton: class extends self.ISpriteInstance {},
	Buy1000CoinsButton: class extends self.ISpriteInstance {},
	Buy5000CoinsButton: class extends self.ISpriteInstance {},
	ShopButton: class extends self.ISpriteInstance {},
	LeaderboardPointsStart: class extends self.ISpriteInstance {},
	LeaderboardPointsStart2: class extends self.ISpriteInstance {},
	LeaderboardStart: class extends self.ISpriteInstance {},
	LeaderboardStart2: class extends self.ISpriteInstance {},
	MenuFadeEffect: class extends self.ITiledBackgroundInstance {},
	NameInput: class extends self.ITextInputInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Avatar_Profile_Main: class extends self.IHTMLElementInstance {},
	StarBgLayer1: class extends self.ISpriteInstance {},
	StarBgLayer2: class extends self.ISpriteInstance {},
	StarBgLayer3: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	MenuBgStar: class extends self.ISpriteInstance {},
	PadParams: class extends self.IArrayInstance {},
	Items_Unlocked: class extends self.IArrayInstance {},
	LocalStorage: class extends self.IInstance {},
	Items_Available: class extends self.IArrayInstance {},
	Items_MaxMint: class extends self.IArrayInstance {},
	Touch: class extends self.IInstance {},
	JSON: class extends self.IJSONInstance {},
	metaproPlugin: class extends self.IInstance {},
	KillAfterAnimation: class extends self.ISpriteInstance {},
	Areas: class extends self.ISpriteInstance {},
	BgStars: class extends self.ISpriteInstance {},
	MenuButtons: class extends self.ISpriteInstance {},
	MenuButtonsBig: class extends self.IWorldInstance {}
}