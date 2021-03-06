define({
	//standing
	standing: {
		physics: "standing",
		conditions: function() {
			return !this.isAirborne();
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "light_neutral_attack", cancel: true },
			{ state: "light_forward_attack", cancel: true },
			{ state: "light_up_attack", cancel: true },
			{ state: "light_down_attack", cancel: true },
			{ state: "heavy_neutral_attack_start", cancel: true },
			{ state: "heavy_forward_attack_start", cancel: true },
			{ state: "heavy_up_attack_start", cancel: true },
			{ state: "heavy_down_attack_start", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "run_start", cancel: true },
			{ state: "standing_turnaround_start", cancel: true },
			{ state: "block_start", cancel: true },
			{ state: "crouch_start", cancel: true },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	standing_turnaround_start: {
		physics: "running",
		conditions: function() {
			return this.heldHorizontalDir === -this.facing || this.hasBufferedHorizontalDir(-this.facing);
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedHorizontalDir();
			this.facing = -this.facing;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "light_neutral_attack", cancel: true },
			{ state: "light_forward_attack", cancel: true },
			{ state: "light_up_attack", cancel: true },
			{ state: "light_down_attack", cancel: true },
			{ state: "heavy_neutral_attack_start", cancel: true },
			{ state: "heavy_forward_attack_start", cancel: true },
			{ state: "heavy_up_attack_start", cancel: true },
			{ state: "heavy_down_attack_start", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "standing_turnaround_start", frameCancel: true },
			{ state: "running_turnaround_end" },
			{ state: "standing_turnaround_end" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	standing_turnaround_end: {
		physics: "standing",
		conditions: null,
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "light_neutral_attack", cancel: true },
			{ state: "light_forward_attack", cancel: true },
			{ state: "light_up_attack", cancel: true },
			{ state: "light_down_attack", cancel: true },
			{ state: "heavy_neutral_attack_start", cancel: true },
			{ state: "heavy_forward_attack_start", cancel: true },
			{ state: "heavy_up_attack_start", cancel: true },
			{ state: "heavy_down_attack_start", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "block_start", cancel: true },
			{ state: "run_start", frameCancel: true },
			{ state: "standing_turnaround_start", cancel: true },
			{ state: "standing" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},


	//running
	running: {
		physics: "running",
		conditions: null,
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "light_neutral_attack", cancel: true },
			{ state: "light_forward_attack", cancel: true },
			{ state: "light_up_attack", cancel: true },
			{ state: "light_down_attack", cancel: true },
			{ state: "heavy_neutral_attack_start", cancel: true },
			{ state: "heavy_forward_attack_start", cancel: true },
			{ state: "heavy_up_attack_start", cancel: true },
			{ state: "heavy_down_attack_start", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "block_start", cancel: true },
			{ state: "crouch_start", cancel: true },
			{ state: "run_end", cancel: true },
			{ state: "running_turnaround_start", cancel: true },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true },
		]
	},
	run_start: {
		physics: "running",
		conditions: function() {
			return this.heldHorizontalDir === this.facing || this.hasBufferedHorizontalDir(this.facing);
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedHorizontalDir();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "light_neutral_attack", cancel: true },
			{ state: "light_forward_attack", cancel: true },
			{ state: "light_up_attack", cancel: true },
			{ state: "light_down_attack", cancel: true },
			{ state: "heavy_neutral_attack_start", cancel: true },
			{ state: "heavy_forward_attack_start", cancel: true },
			{ state: "heavy_up_attack_start", cancel: true },
			{ state: "heavy_down_attack_start", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "running_turnaround_start", frameCancel: true },
			{ state: "standing_turnaround_start", frameCancel: true },
			{ state: "run_end_quick", frameCancel: true },
			{ state: "running" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	run_end: {
		physics: "standing",
		conditions: function() {
			return this.heldHorizontalDir === 0;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "light_neutral_attack", cancel: true },
			{ state: "light_forward_attack", cancel: true },
			{ state: "light_up_attack", cancel: true },
			{ state: "light_down_attack", cancel: true },
			{ state: "heavy_neutral_attack_start", cancel: true },
			{ state: "heavy_forward_attack_start", cancel: true },
			{ state: "heavy_up_attack_start", cancel: true },
			{ state: "heavy_down_attack_start", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "block_start", cancel: true },
			{ state: "run_start", frameCancel: true },
			{ state: "running_turnaround_start", frameCancel: true },
			{ state: "standing_turnaround_start", frameCancel: true },
			{ state: "standing" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	run_end_quick: {
		physics: "standing",
		conditions: function() {
			return this.heldHorizontalDir === 0;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "light_neutral_attack", cancel: true },
			{ state: "light_forward_attack", cancel: true },
			{ state: "light_up_attack", cancel: true },
			{ state: "light_down_attack", cancel: true },
			{ state: "heavy_neutral_attack_start", cancel: true },
			{ state: "heavy_forward_attack_start", cancel: true },
			{ state: "heavy_up_attack_start", cancel: true },
			{ state: "heavy_down_attack_start", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "standing" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	running_turnaround_start: {
		physics: "running",
		conditions: function() {
			return this.heldHorizontalDir === -this.facing || this.hasBufferedHorizontalDir(-this.facing);
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedHorizontalDir();
			this.facing = -this.facing;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "light_neutral_attack", cancel: true },
			{ state: "light_forward_attack", cancel: true },
			{ state: "light_up_attack", cancel: true },
			{ state: "light_down_attack", cancel: true },
			{ state: "heavy_neutral_attack_start", cancel: true },
			{ state: "heavy_forward_attack_start", cancel: true },
			{ state: "heavy_up_attack_start", cancel: true },
			{ state: "heavy_down_attack_start", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "running_turnaround_end" },
			{ state: "standing_turnaround_end" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	running_turnaround_end: {
		physics: "running",
		conditions: function() {
			return this.heldHorizontalDir === this.facing;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "light_neutral_attack", cancel: true },
			{ state: "light_forward_attack", cancel: true },
			{ state: "light_up_attack", cancel: true },
			{ state: "light_down_attack", cancel: true },
			{ state: "heavy_neutral_attack_start", cancel: true },
			{ state: "heavy_forward_attack_start", cancel: true },
			{ state: "heavy_up_attack_start", cancel: true },
			{ state: "heavy_down_attack_start", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "running_turnaround_start", cancel: true },
			{ state: "running" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},


	//crouching
	crouching: {
		physics: "standing",
		conditions: null,
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "block_start", cancel: true },
			{ state: "crouch_end", cancel: true },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	crouch_start: {
		physics: "standing",
		conditions: function() {
			return this.heldVerticalDir === 1;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "block_start", cancel: true },
			{ state: "crouching" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	crouch_end: {
		physics: "standing",
		conditions: function() {
			return this.heldVerticalDir !== 1;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "block_start", cancel: true },
			{ state: "standing_turnaround_start", frameCancel: true },
			{ state: "run_start", frameCancel: true },
			{ state: "standing" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},


	//blocking
	blocking: {
		physics: "standing",
		isBlocking: true,
		conditions: null,
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "block_end", cancel: true },
			{ state: "airborne_block_falloff", cancel: true }
		]
	},
	block_start: {
		physics: "standing",
		isBlocking: true,
		conditions: function() {
			return this.isHoldingBlock;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "blocking" },
			{ state: "airborne_block_falloff", cancel: true }
		]
	},
	block_end: {
		physics: "standing",
		conditions: function() {
			return !this.isHoldingBlock;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "standing" },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	block_landing: {
		physics: "standing",
		isBlocking: true,
		conditions: function() {
			return !this.isAirborne();
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "blocking" }
		]
	},
	airborne_blocking: {
		physics: "airborne",
		isBlocking: true,
		conditions: null,
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "block_landing", cancel: true },
			{ state: "airborne_block_end", cancel: true }
		]
	},
	airborne_block_start: {
		physics: "airborne",
		isBlocking: true,
		conditions: function() {
			return this.isHoldingBlock;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_blocking" },
			{ state: "jump_landing", cancel: true }
		]
	},
	airborne_block_end: {
		physics: "airborne",
		conditions: function() {
			return !this.isHoldingBlock;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne" },
			{ state: "jump_landing", cancel: true }
		]
	},
	airborne_block_falloff: {
		physics: "airborne",
		isBlocking: true,
		conditions: function() {
			return this.isAirborne();
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_blocking" }
		]
	},

	//jumping/airborne
	jump_takeoff: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("JUMP");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: function(nextState) {
			this.platform = null;
			if(nextState === "airborne") {
				this.framesSinceLastJump = 0;
				var stillVelX = (this.platform ? this.platform.vel.x : 0);
				var stillVelY = (this.platform ? this.platform.vel.y : 0);
				//when jumping off the ground, you can get a little horizontal boost to start you out
				var jumpHorizontalSpeed = this.getFrameDataValue("jumpHorizontalSpeed");
				if(this.heldHorizontalDir !== 0) {
					var m = this.heldHorizontalDir;
					if(this.vel.x * m < stillVelX * m + jumpHorizontalSpeed) {
						this.vel.x = stillVelX + jumpHorizontalSpeed * m;
					}
				}
				this.vel.y = Math.min(this.vel.y, stillVelY - this.getFrameDataValue("jumpSpeed"));
			}
		},
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne" },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	jump_landing: {
		physics: "standing",
		conditions: function() {
			return !this.isAirborne();
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "standing_turnaround_start", frameCancel: true },
			{ state: "run_start", frameCancel: true },
			{ state: "crouch_start", frameCancel: true },
			{ state: "standing" },
			{ state: "jump_takeoff", cancel: true },
			{ state: "airborne_falloff", cancel: true }
		]
	},
	airborne: {
		physics: "airborne",
		conditions: null,
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "airborne_block_start", cancel: true },
			{ state: "airborne_jump", cancel: true },
			{ state: "airborne_light_neutral_attack", cancel: true },
			{ state: "airborne_light_forward_attack", cancel: true },
			{ state: "airborne_light_back_attack", cancel: true },
			{ state: "airborne_light_up_attack", cancel: true },
			{ state: "airborne_light_down_attack", cancel: true },
			{ state: "airborne_heavy_neutral_attack_start", cancel: true },
			{ state: "airborne_heavy_forward_attack_start", cancel: true },
			{ state: "airborne_heavy_back_attack_start", cancel: true },
			{ state: "airborne_heavy_up_attack_start", cancel: true },
			{ state: "airborne_heavy_down_attack_start", cancel: true }
		]
	},
	airborne_jump: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("JUMP") &&
				this.framesSinceLastJump > this.getFrameDataValue("framesBetweenJumps") &&
				this.airborneJumpsUsed < this.getFrameDataValue("numAirborneJumps");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.airborneJumpsUsed++;
			this.clearBufferedAction();
			var stillVelX = (this.platform ? this.platform.vel.x : 0);
			var stillVelY = (this.platform ? this.platform.vel.y : 0);
			//when air jumping, you can get a little horizontal boost to start you out
			var airborneJumpHorizontalSpeed = this.getFrameDataValue("airborneJumpHorizontalSpeed");
			if(this.heldHorizontalDir !== 0) {
				var m = this.heldHorizontalDir;
				if(this.vel.x * m < stillVelX * m + airborneJumpHorizontalSpeed) {
					this.vel.x = stillVelX + airborneJumpHorizontalSpeed * m;
				}
			}
			this.vel.y = Math.min(this.vel.y, stillVelY - this.getFrameDataValue("airborneJumpSpeed"));
			if(this.heldHorizontalDir === -this.facing) {
				this.facing = -this.facing;
			}
		},
		effectsOnLeave: function(nextState) {
			this.framesSinceLastJump = 0;
		},
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true },
			{ state: "airborne_light_neutral_attack", cancel: true },
			{ state: "airborne_light_forward_attack", cancel: true },
			{ state: "airborne_light_back_attack", cancel: true },
			{ state: "airborne_light_up_attack", cancel: true },
			{ state: "airborne_light_down_attack", cancel: true },
			{ state: "airborne_heavy_neutral_attack_start", cancel: true },
			{ state: "airborne_heavy_forward_attack_start", cancel: true },
			{ state: "airborne_heavy_back_attack_start", cancel: true },
			{ state: "airborne_heavy_up_attack_start", cancel: true },
			{ state: "airborne_heavy_down_attack_start", cancel: true },
			{ state: "airborne" }
		]
	},
	airborne_falloff: {
		physics: "airborne",
		conditions: function() {
			return this.isAirborne();
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true },
			{ state: "dash", cancel: true },
			{ state: "airborne_block_start", cancel: true },
			{ state: "airborne_jump", cancel: true },
			{ state: "airborne_light_neutral_attack", cancel: true },
			{ state: "airborne_light_forward_attack", cancel: true },
			{ state: "airborne_light_back_attack", cancel: true },
			{ state: "airborne_light_up_attack", cancel: true },
			{ state: "airborne_light_down_attack", cancel: true },
			{ state: "airborne_heavy_neutral_attack_start", cancel: true },
			{ state: "airborne_heavy_forward_attack_start", cancel: true },
			{ state: "airborne_heavy_back_attack_start", cancel: true },
			{ state: "airborne_heavy_up_attack_start", cancel: true },
			{ state: "airborne_heavy_down_attack_start", cancel: true },
			{ state: "airborne" }
		]
	},


	//dashing
	dash: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("DASH") &&
				this.framesSinceLastDash > this.getFrameDataValue("framesBetweenDashes") &&
				(this.platform || this.airborneJumpsUsed < this.getFrameDataValue("numAirborneJumps"));
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.facing = this.bufferedActionDir;
			this.clearBufferedAction();
			var speed = this.getFrameDataValue(this.platform ? "dashSpeed" : "airDashSpeed");
			var m = this.facing;
			var stillVelX = (this.platform ? this.platform.vel.x : 0);
			if(this.vel.x * m < stillVelX + speed) {
				this.vel.x = stillVelX + speed * m;
			}
			this.vel.y = (this.platform ? this.platform.vel.y : 0);
			if(!this.platform) {
				this.airborneJumpsUsed++;
			}
		},
		effectsOnLeave: function(nextState) {
			this.framesSinceLastDash = 0;
		},
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "standing" },
			{ state: "airborne" }
		]
	},


	//grounded light attacks
	light_neutral_attack: {
		physics: "standing",
		conditions: function() {
			return this.hasBufferedAction("LIGHT_NEUTRAL_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "standing" }
		]
	},
	light_forward_attack: {
		physics: "standing",
		conditions: function() {
			return this.hasBufferedAction("LIGHT_FORWARD_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			if(this.bufferedActionDir !== 0) {
				this.facing = this.bufferedActionDir;
			}
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "standing" }
		]
	},
	light_up_attack: {
		physics: "standing",
		conditions: function() {
			return this.hasBufferedAction("LIGHT_UP_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "standing" }
		]
	},
	light_down_attack: {
		physics: "standing",
		conditions: function() {
			return this.hasBufferedAction("LIGHT_DOWN_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "standing" }
		]
	},


	//airborne light attacks
	airborne_light_neutral_attack: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("LIGHT_NEUTRAL_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},
	airborne_light_forward_attack: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("LIGHT_FORWARD_ATTACK") && this.bufferedActionDir === this.facing;
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},
	airborne_light_back_attack: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("LIGHT_FORWARD_ATTACK") && this.bufferedActionDir !== this.facing;
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},
	airborne_light_up_attack: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("LIGHT_UP_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},
	airborne_light_down_attack: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("LIGHT_DOWN_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},


	//grounded heavy attacks
	heavy_neutral_attack_start: {
		physics: "standing",
		conditions: function() {
			return this.hasBufferedAction("HEAVY_NEUTRAL_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "heavy_neutral_attack_charge" }
		]
	},
	heavy_neutral_attack_charge: {
		physics: "standing",
		isCharging: true,
		conditions: null,
		effectsOnEnter: function() {
			this.framesSpentCharging = 0;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "heavy_neutral_attack_end", cancel: true }
		]
	},
	heavy_neutral_attack_end: {
		physics: "standing",
		conditions: function() {
			return !this.isHoldingHeavyAttack || this.framesSpentCharging >= this.getFrameDataValue("maxChargeFrames");
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "standing" }
		]
	},
	heavy_forward_attack_start: {
		physics: "standing",
		conditions: function() {
			return this.hasBufferedAction("HEAVY_FORWARD_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			if(this.bufferedActionDir !== 0) {
				this.facing = this.bufferedActionDir;
			}
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "heavy_forward_attack_charge" }
		]
	},
	heavy_forward_attack_charge: {
		physics: "standing",
		isCharging: true,
		conditions: null,
		effectsOnEnter: function() {
			this.framesSpentCharging = 0;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "heavy_forward_attack_end", cancel: true }
		]
	},
	heavy_forward_attack_end: {
		physics: "standing",
		conditions: function() {
			return !this.isHoldingHeavyAttack || this.framesSpentCharging >= this.getFrameDataValue("maxChargeFrames");
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "standing" }
		]
	},
	heavy_up_attack_start: {
		physics: "standing",
		conditions: function() {
			return this.hasBufferedAction("HEAVY_UP_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "heavy_up_attack_charge" }
		]
	},
	heavy_up_attack_end: {
		physics: "standing",
		conditions: function() {
			return !this.isHoldingHeavyAttack || this.framesSpentCharging >= this.getFrameDataValue("maxChargeFrames");
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "standing" }
		]
	},
	heavy_up_attack_charge: {
		physics: "standing",
		isCharging: true,
		conditions: null,
		effectsOnEnter: function() {
			this.framesSpentCharging = 0;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "heavy_up_attack_end", cancel: true }
		]
	},
	heavy_down_attack_start: {
		physics: "standing",
		conditions: function() {
			return this.hasBufferedAction("HEAVY_DOWN_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "heavy_down_attack_charge" }
		]
	},
	heavy_down_attack_charge: {
		physics: "standing",
		isCharging: true,
		conditions: null,
		effectsOnEnter: function() {
			this.framesSpentCharging = 0;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "heavy_down_attack_end", cancel: true }
		]
	},
	heavy_down_attack_end: {
		physics: "standing",
		conditions: function() {
			return !this.isHoldingHeavyAttack || this.framesSpentCharging >= this.getFrameDataValue("maxChargeFrames");
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "airborne_falloff", cancel: true },
			{ state: "crouching" }
		]
	},


	//airborne heavy attacks
	airborne_heavy_neutral_attack_start: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("HEAVY_NEUTRAL_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_neutral_attack_charge" }
		]
	},
	airborne_heavy_neutral_attack_charge: {
		physics: "airborne",
		isCharging: true,
		conditions: null,
		effectsOnEnter: function() {
			this.framesSpentCharging = 0;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_neutral_attack_end", cancel: true }
		]
	},
	airborne_heavy_neutral_attack_end: {
		physics: "airborne",
		conditions: function() {
			return !this.isHoldingHeavyAttack || this.framesSpentCharging >= this.getFrameDataValue("maxChargeFrames");
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},
	airborne_heavy_forward_attack_start: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("HEAVY_FORWARD_ATTACK") && this.bufferedActionDir === this.facing;
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_forward_attack_charge" }
		]
	},
	airborne_heavy_forward_attack_charge: {
		physics: "airborne",
		isCharging: true,
		conditions: null,
		effectsOnEnter: function() {
			this.framesSpentCharging = 0;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_forward_attack_end", cancel: true }
		]
	},
	airborne_heavy_forward_attack_end: {
		physics: "airborne",
		conditions: function() {
			return !this.isHoldingHeavyAttack || this.framesSpentCharging >= this.getFrameDataValue("maxChargeFrames");
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},
	airborne_heavy_back_attack_start: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("HEAVY_FORWARD_ATTACK") && this.bufferedActionDir !== this.facing;
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_back_attack_charge" }
		]
	},
	airborne_heavy_back_attack_charge: {
		physics: "airborne",
		isCharging: true,
		conditions: null,
		effectsOnEnter: function() {
			this.framesSpentCharging = 0;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_back_attack_end", cancel: true }
		]
	},
	airborne_heavy_back_attack_end: {
		physics: "airborne",
		conditions: function() {
			return !this.isHoldingHeavyAttack || this.framesSpentCharging >= this.getFrameDataValue("maxChargeFrames");
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},
	airborne_heavy_up_attack_start: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("HEAVY_UP_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_up_attack_charge" }
		]
	},
	airborne_heavy_up_attack_end: {
		physics: "airborne",
		conditions: function() {
			return !this.isHoldingHeavyAttack || this.framesSpentCharging >= this.getFrameDataValue("maxChargeFrames");
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},
	airborne_heavy_up_attack_charge: {
		physics: "airborne",
		isCharging: true,
		conditions: null,
		effectsOnEnter: function() {
			this.framesSpentCharging = 0;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_up_attack_end", cancel: true }
		]
	},
	airborne_heavy_down_attack_start: {
		physics: "airborne",
		conditions: function() {
			return this.hasBufferedAction("HEAVY_DOWN_ATTACK");
		},
		effectsOnEnter: function(prevState, prevFrames) {
			this.clearBufferedAction();
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_down_attack_charge" }
		]
	},
	airborne_heavy_down_attack_charge: {
		physics: "airborne",
		isCharging: true,
		conditions: null,
		effectsOnEnter: function() {
			this.framesSpentCharging = 0;
		},
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne_heavy_down_attack_end", cancel: true }
		]
	},
	airborne_heavy_down_attack_end: {
		physics: "airborne",
		conditions: function() {
			return !this.isHoldingHeavyAttack || this.framesSpentCharging >= this.getFrameDataValue("maxChargeFrames");
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain", cancel: true },
			{ state: "jump_landing", cancel: true }, //TODO possibly cancel into attack-specific landing
			{ state: "airborne" }
		]
	},


	//pain
	"pain": {
		physics: "standing",
		conditions: function() {
			return this.framesOfStunLeft > 0 && !this.isAirborne();
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "airborne_pain", cancel: true },
			{ state: "pain_recovery", cancel: true }
		]
	},
	"pain_recovery": {
		physics: "standing",
		conditions: function() {
			return this.framesOfStunLeft === 0;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "airborne_falloff" },
			{ state: "standing" }
		]
	},
	"airborne_pain": {
		physics: "airborne",
		conditions: function() {
			return this.framesOfStunLeft > 0 && this.isAirborne();
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "pain", cancel: true },
			{ state: "airborne_pain_recovery", cancel: true }
		]
	},
	"airborne_pain_recovery": {
		physics: "airborne",
		conditions: function() {
			return this.framesOfStunLeft === 0;
		},
		effectsOnEnter: null,
		effectsOnLeave: null,
		transitions: [
			{ state: "jump_landing", cancel: true },
			{ state: "airborne" }
		]
	}
});