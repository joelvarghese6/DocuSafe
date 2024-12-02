use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("Fjbwxvvj4yk83jKLRnbKjjJoAoxnMoKyMDKkQ2StbvQ4");

#[program]
mod hello_anchor {
    use super::*;

    pub fn create_user(ctx: Context<CreateUser>, username: String, email: String, wallet: Pubkey) -> Result<()> {
        let user = &mut ctx.accounts.user;
        user.username = username;
        user.email = email;
        user.wallet = wallet;
        user.authority = *ctx.accounts.authority.key;

        Ok(())
    }

    pub fn create_document(
        ctx: Context<CreateDocument>,
        doc_id: String,
        doc_name: String,
        timestamp: i64,
        doc_hash: String,
    ) -> Result<()> {
        let document = &mut ctx.accounts.document;
        document.doc_id = doc_id;
        document.doc_name = doc_name;
        document.timestamp = timestamp;
        document.doc_hash = doc_hash;
        document.creator = *ctx.accounts.creator.key;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateUser<'info> {
    #[account(init, payer = authority, space = 8 + 32 + 40 + 40 + 32)]
    pub user: Account<'info, User>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateDocument<'info> {
    #[account(init, payer = creator, space = 8 + 32 + 40 + 8 + 64 + 32)]
    pub document: Account<'info, Document>,
    #[account(mut)]
    pub creator: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
#[derive(InitSpace)]
pub struct User {
    #[max_len(40)]
    pub username: String, 
    #[max_len(40)]         
    pub email: String,    
    pub wallet: Pubkey,
    pub authority: Pubkey,
}

#[account]
#[derive(InitSpace)]
pub struct Document {
    #[max_len(32)]
    pub doc_id: String, 
    #[max_len(40)]   
    pub doc_name: String,  
    pub timestamp: i64,
    #[max_len(64)]
    pub doc_hash: String, 
    pub creator: Pubkey,
}